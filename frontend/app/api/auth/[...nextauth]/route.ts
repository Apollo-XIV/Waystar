import NextAuth, { CookiesOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { config } from "dotenv";

config();
if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    if (process.env.BUILD == "true") {
        process.env.GITHUB_ID="";
        process.env.GITHUB_SECRET="";
        console.log("Using spoofed values for build")

    } else {
        throw new Error("REQUIRED ENV VARS NOT SET")
    }
};

if (!process.env.GOOGLE_AUTH_ID || !process.env.GOOGLE_AUTH_SECRET) {
    if (process.env.BUILD == "true") {
        process.env.GOOGLE_AUTH_ID="";
        process.env.GOOGLE_AUTH_SECRET="";
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
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_ID,
            clientSecret: process.env.GOOGLE_AUTH_SECRET,
        })
    ],
    session:{
        strategy: "jwt"
    },
    callbacks: {
        async session({session}) {
            return session
        },
        async jwt({token, account}) {
            if (account) {
                token.uid = account.providerAccountId;
            }
            return token
        }
    },
    events: {
        async signIn({isNewUser, profile}) {
            // if (!isNewUser) {return};
            fetch(`http://localhost:3001/users/new`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    profile
                })
            })
                .catch((e: any) => {
                    console.log(e);
                })
        }
    }
});
export { handler as GET, handler as POST}


function generateAPIKey(string: string, key: string) {

}