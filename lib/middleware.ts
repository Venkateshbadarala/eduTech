// middleware.ts

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    const path = req.nextUrl.pathname;

    // ✅ ADMIN ONLY
    if (path.startsWith("/admin")) {
      if (token?.role !== "admin") {
        return NextResponse.redirect(
          new URL("/", req.url)
        );
      }
    }

    return NextResponse.next();
  },

  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;

        // ✅ PUBLIC ROUTES
        if (
          path === "/" ||
          path.startsWith("/courses") ||
          path.startsWith("/about") ||
          path.startsWith("/contact") ||
          path.startsWith("/privacy-policy") ||
          path.startsWith("/terms-and-conditions")
        ) {
          return true;
        }

        // ✅ REQUIRE LOGIN
        return !!token;
      },
    },

    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/my-courses/:path*",
  ],
};