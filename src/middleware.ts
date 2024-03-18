import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const searchParams = url.searchParams.toString();
  let hostname = request.headers;
  const token = request.cookies.get('token')?.value

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `${searchParams}` : ""
  }`;
  
  const PUBLIC_FILE = /\.(.*)$/;
  const hostName = hostname
    .get("host")
    const hasSub = hostName?.includes('.')
    if(PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return

  if (hasSub) {
    return NextResponse.rewrite(
      new URL(`/${hostName}${pathWithSearchParams}`, request.url)
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
