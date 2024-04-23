import NextAuth from "next-auth/next";
import { authOptions } from "./options";

const authHandler = NextAuth(authOptions);

export {authHandler as GET, authHandler as POST}