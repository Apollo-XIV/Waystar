import {NextFunction, Request, Response} from "express";
import {match} from "path-to-regexp";
import {JWT, getToken} from "next-auth/jwt";

export interface AuthRequest extends Request {
    token: JWT | null;
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
    /** 
     *  1. Check if valid token. If yes, pass on to all requests and fallback to route level auth checking
     * 
     *  2. If no valid token, check if requested route is considered protected. If yes, send 403 Forbidden
     * 
     *  3. If no valid token, but not a protected route, forward on request with null token
     */
    
    const routes = [
    "/test",
    "/logs/userLogs",
    "/logs/new"
    ]
    
    const token = await getToken({req}).catch((e: Error) => {
            res.status(501).send("Internal server error during auth. Please notify the maintainer if this error persists.")
    })

    const protectedRoute = () => routes.map((route) => {
        const fn = match(route, {decode: decodeURIComponent});
        return (!fn(req.url)) ? false : true;
    }).reduce((accumulator, currentValue) => {
        return (accumulator || currentValue) ? true : false;
    }, false);

    if (req.headers.test == "true") {
        console.log("received api test call")
        req.token = {id: parseInt(req.headers.id.toString())}
        next()
        return;
    }

    if (token) {
        console.log(token);
        req.token = token;
    } else if (protectedRoute()) {
        res.status(403).send("You are not permitted to access this resource.");
        console.log("denied unauthed request");
        return;
    } else {
        console.log("accepting unauthed req")
        req.token = null;
    }
    next()
}