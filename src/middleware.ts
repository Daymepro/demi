import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const searchParams = url.searchParams.toString();
  let hostname = request.headers;


  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `${searchParams}` : ""
  }`;
  const PUBLIC_FILE = /\.(.*)$/;
  const customSubDomain = hostname
    .get("host")
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];
 
    if(PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return
  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, request.url)
    );
  }

  if (
    url.pathname.startsWith("/website") ||
    url.pathname.startsWith("/content-generator") ||
    url.pathname.startsWith("/ai") ||
    url.pathname.startsWith("/editor") ||
    url.pathname.startsWith("/api")


  ) {
    return NextResponse.rewrite(
      new URL(`${pathWithSearchParams}`, request.url)
    );
  }
}
