
import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextRequest, NextResponse } from "next/server";


export default async function proxy(request: NextRequest){
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if(!session){
        return NextResponse.redirect(new URL("/sign-up",request.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/productDetails/:productId","/profile"]
}