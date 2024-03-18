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
  const Host = process.env.NEXT_PUBLIC_DOMAIN || "fluttersuite.com";
  const PUBLIC_FILE = /\.(.*)$/;
  console.log("host here"; )
  console.log(Host); 
  const customSubDomain = hostname
    .get("host")
    ?.split(Host)
    .filter(Boolean)[0];
 
    if(PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return
    console.log(hostname
      .get("host"))
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
