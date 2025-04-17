import { NextRequest } from "next/server";

/*The Default function Here in middleware.ts file, Will executed when every time the url change.*/
/* This File is default will execute on server as any file in the NextJS project, Unless you put
   "use client" in the file Here will be execute on the client.*/
export default async function middleware(req: NextRequest) {
  // console.log("Hi im middleware + " + req.url);
}
