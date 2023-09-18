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

    const protectedRoute = (routes: string[]) => routes
        .map((route) => compareRouteToPath(route, req.url))
        .reduce(checkIfTruthy);

    if (req.headers.test == "true" && process.env.NODE_ENV == "dev") {
        console.log("received api test call")
        req.token = {id: parseInt(req.headers.id.toString())}
        next()
        return;
    }

    if (token) {
        console.log("accepting authed request")
        req.token = token;
    } else if (protectedRoute(routes)) {
        res.status(403).send("You are not permitted to access this resource.");
        console.log("denied unauthed request");
        return;
    } else {
        console.log("accepting unauthed request to unprotected route")
        req.token = null;
    }
    next()
}

function compareRouteToPath(route: string, path: string) {
    const fn = match(route, { decode: decodeURIComponent }); // regex checker
    const result = (fn(path)) ? true : false;
    return result;
}

const checkIfTruthy = (accumulator: Boolean, currentValue: Boolean) => {
    return (accumulator || currentValue) ? true : false;
}

// // returns a true or false value for whether or not the route is protected.

// function newFunction(routes: string[], req: AuthRequest) {
//     return () => routes.map((route) => {
//         const fn = match(route, { decode: decodeURIComponent });
//         return (!fn(req.url)) ? false : true;
//     }).reduce((accumulator, currentValue) => {
//         return (accumulator || currentValue) ? true : false;
//     }, false);
// }