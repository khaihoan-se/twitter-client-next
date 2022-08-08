// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
   // Setting url on the request
   const url = request.nextUrl.clone()
   // Getting cookies from the request
   const cookieToken = request.cookies.get('token')
   // check if the token is valid page Login
   if(url.pathname === '/login') {
      if(cookieToken) {
         return NextResponse.redirect(new URL('/', request.url))
      }
   }
   // check if the token is valid page Home
   if(
      (url.pathname === '/') || 
      (url.pathname === '/messages') || 
      (url.pathname === '/notifications') ||
      (url.pathname === '/bookmarks') ||
      (url.pathname === '/lists')
   ) {
      if(!cookieToken) {
         return NextResponse.redirect(new URL('/login', request.url))
      }
   }

   return NextResponse.next()
}