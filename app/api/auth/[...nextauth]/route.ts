// import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import dbConnect from "@/lib/db";
// import User from "@/model/User";
// import bcrypt from "bcryptjs";

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,

//   pages: {
//     signIn: "/login",
//   },

//   session: {
//     strategy: "jwt",
//   },

//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {},
//         password: {},
//       },

//       async authorize(credentials) {
//         try {
//           console.log("📥 LOGIN INPUT:", credentials);

//           if (!credentials?.email || !credentials.password) {
//             console.log("❌ Missing credentials");
//             return null;
//           }

//           await dbConnect();

//           // ✅ IMPORTANT: include password
//           const user = await User.findOne({
//             email: credentials.email,
//           }).select("+password");

//           console.log("👤 USER FROM DB:", user);

//           if (!user) {
//             console.log("❌ User not found");
//             return null;
//           }

//           const isValid = await bcrypt.compare(
//             credentials.password,
//             user.password
//           );

//           console.log("🔐 PASSWORD MATCH:", isValid);

//           if (!isValid) {
//             console.log("❌ Invalid password");
//             return null;
//           }

//           console.log("✅ LOGIN SUCCESS");

//           return {
//             id: user._id.toString(),
//             name: user.name,
//             email: user.email,
//           };

//         } catch (error) {
//           console.error("❌ AUTH ERROR:", error);
//           return null;
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = (user as any).id;
//       }
//       console.log("🪪 JWT TOKEN:", token);
//       return token;
//     },

//     async session({ session, token }) {
//       session.user = token as any;
//       console.log("📦 SESSION:", session);
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



import NextAuth, {
  NextAuthOptions,
} from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import dbConnect from "@/lib/db";
import User from "@/model/User";

// ✅ ADMIN EMAIL
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL

export const authOptions: NextAuthOptions =
  {
    secret:
      process.env.NEXTAUTH_SECRET,

    pages: {
      signIn: "/login",
    },

    session: {
      strategy: "jwt",
    },

    providers: [
      CredentialsProvider({
        name: "Credentials",

        credentials: {
          email: {},
          password: {},
        },

        async authorize(credentials) {
          try {
            if (
              !credentials?.email ||
              !credentials.password
            ) {
              return null;
            }

            await dbConnect();

            const user =
              await User.findOne({
                email:
                  credentials.email,
              }).select("+password");

            if (!user) {
              return null;
            }

            const isValid =
              await bcrypt.compare(
                credentials.password,
                user.password
              );

            if (!isValid) {
              return null;
            }

            // ✅ ROLE BASED ON EMAIL
            const role =
              user.email === ADMIN_EMAIL
                ? "admin"
                : "user";

            return {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
              role,
            };
          } catch (error) {
            console.log(error);
            return null;
          }
        },
      }),
    ],

    callbacks: {
      async jwt({
        token,
        user,
      }) {
        if (user) {
          token.id = (
            user as any
          ).id;

          token.role = (
            user as any
          ).role;
        }

        return token;
      },

      async session({
        session,
        token,
      }) {
        session.user = {
          ...session.user,

          id: token.id,

          role: token.role,
        } as any;

        return session;
      },
    },
  };

const handler = NextAuth(authOptions);

export {
  handler as GET,
  handler as POST,
};