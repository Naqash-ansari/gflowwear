import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    
    let authToken = request.cookies.get('tenant_id').value;
    let getPath = request.nextUrl.pathname

    const authCheck = getPath === '/account/login' || getPath === '/account/signup';

    if(authCheck){
        if(authToken){
            return NextResponse.redirect(new URL('/', request.url))
        }
    }else{
        if(!authToken){
            return NextResponse.redirect(new URL('/layout/product', request.url))
        }
    }
    
    console.log('executed middleware : ', authToken)

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/layout/shop:path*',
}