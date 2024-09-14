import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();
  // const accessToken = request.cookies.get("accessToken");

  // if (!accessToken) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }
  return response;
};

export const config = {
  matcher: ["/community/:path*", "/follows/:path*"],
};
