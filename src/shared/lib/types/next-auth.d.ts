import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    message: string;
    token: string;
    data: {
      _id: string;
      fullName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    maxAge?: number;
  }

  interface Session {
    user: User["data"];
    maxAge?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: User["token"];
    user: User["data"];
    maxAge?: number;
  }
}
