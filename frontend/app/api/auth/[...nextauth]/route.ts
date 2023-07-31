import NextAuth, { CookiesOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { config } from "dotenv";

config();
if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    console.log(process.env.BUILD)
    if (process.env.BUILD == "true") {
        process.env.GITHUB_ID="";
        process.env.GITHUB_SECRET="";
        console.log("Using spoofed values for build")

    } else {
        throw new Error("REQUIRED ENV VARS NOT SET")
    }
};

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    session:{
        strategy: "jwt"
    },
    callbacks: {
        async session({session, token}) {
            session.accessToken = JSON.stringify(token);
            return session
        },
        async jwt({token}) {
            return token
        }
    }
});
export { handler as GET, handler as POST}


function generateAPIKey(string: string, key: string) {

}