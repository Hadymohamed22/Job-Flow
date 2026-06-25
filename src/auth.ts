import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "credentials-provider",
      credentials: {
        email: {},
        password: {},
        rememberMe: {},
      },
      authorize: async (credentials) => {
        const { email, password, rememberMe } = credentials ?? {};

        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const payload = await res.json();

        if ("error" in payload) {
          throw new Error(payload.message || "Failed to login !");
        }

        const maxAge = rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24;

        return {
          id: payload.data._id,
          message: payload.message,
          token: payload.token,
          data: payload.data,
          maxAge,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.user = user.data;
        token.maxAge = user.maxAge;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;

      if (token.maxAge) {
        session.maxAge = token.maxAge;
        session.expires = new Date(
          Date.now() + token.maxAge * 1000,
        ).toISOString();
      }

      return session;
    },
  },
};
