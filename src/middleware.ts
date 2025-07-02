import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";
import { BACKEND_URL } from "./lib/constants";

const protectedRoutes = ["/"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  const refreshToken = request.cookies.get("refreshToken");
  const { pathname } = request.nextUrl;

  if (!protectedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!accessToken && refreshToken) {
    try {
      const result = await axios.post(
        BACKEND_URL + "/auth/refresh",
        {
          token: refreshToken.value,
        },
        {
          withCredentials: true,
        }
      );

      const res = NextResponse.next();
      res.cookies.set({
        name: "accessToken",
        value: result.data.data.accessToken,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 30 * 60 * 1000,
      });

      return res;
    } catch {
      const res = NextResponse.redirect(new URL("/login", request.url));
      res.cookies.delete("refreshToken");
      res.cookies.delete("accessToken");
      return res;
    }
  }

  if (accessToken && refreshToken) {
    try {
      const result = await axios.post(
        BACKEND_URL + "/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken.value}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          validateStatus: function (status) {
            return status < 500; // Reject only if status >= 500
          },
        }
      );

      if (result.statusText.toLowerCase() === "ok") {
        return NextResponse.next();
      }

      if (result.status === 401 && result.data.error === "jwt expired") {
        const refreshResult = await axios.post(
          BACKEND_URL + "/auth/refresh",
          {
            token: refreshToken.value,
          },
          {
            withCredentials: true,
          }
        );

        const res = NextResponse.next();

        res.cookies.set({
          name: "accessToken",
          value: refreshResult.data.data.accessToken,
          httpOnly: true,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production" ? true : false,
          maxAge: 30 * 60 * 1000,
        });

        return res;
      }

      throw new Error("Invalid token");
    } catch {
      const res = NextResponse.redirect(new URL("/login", request.url));
      res.cookies.delete("refreshToken");
      res.cookies.delete("accessToken");
      return res;
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */

    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
};
