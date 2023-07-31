import NextAuth from "next-auth";

declare module "next-auth/core/types" {
    interface Session {
        accessToken: string

    }

    interface User {
        accessToken: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string
    }
}