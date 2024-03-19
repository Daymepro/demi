import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const searchParams = url.searchParams.toString();
  const hostname = request.headers.get('host')!;
  const token = request.cookies.get('token')?.value;

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;
  const Host =  "fluttersuite.com";
  const PUBLIC_FILE = /\.(.*)$/;
  
  const hostName = hostname;
  console.log(hostName);
  console.log(Host);
  console.log(url.hostname); 
  const hasSub = hostname.split('.').length > 2 ? true : false;
  console.log(hasSub);
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;
  
  if (hasSub && hostname !== Host) {
    console.log(Host);
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
