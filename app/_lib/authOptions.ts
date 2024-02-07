import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prismadb";
import userServices from "../_services/userServices";

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          placeholder: "email",
          type: "email",
        },
        password: {
          label: "password",
          placeholder: "password",
          type: "password",
        },
      },
      async authorize(credentials): Promise<any> {
        const user = await userServices.authenticate(
          credentials?.email,
          credentials?.password
        );
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  debug: process.env.NODE_ENV === "production",
};

export default authOptions;
