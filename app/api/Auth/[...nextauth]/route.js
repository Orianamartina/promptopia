import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import {connectToDb} from "@utils/database"
require('dotenv').config();
console.log({
    clientId: process.env.CLIENT_SECRET,
    clientSecret: process.env.GOOGLE_ID
})
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.CLIENT_SECRET
        })
    ],
    async session({session}){

    },
    async signIn({profile}) {
        try {
            await connectToDb();
        } catch (error) {
            console.log(error)
            return false
        }
    }
})