/*         套件API 勿動           */



import NextAuth from "next-auth/next";
import Providers  from "next-auth/providers";

export default NextAuth({
    providers: [
      // OAuth authentication providers
      Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),

      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
     
    ],
  })