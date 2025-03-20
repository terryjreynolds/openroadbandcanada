import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";

export async function fetchComments() {
  // const url = process.env.GOOGLE_SHEETS_ENDPOINT_URL as string; //production endpoint
  const devUrl = process.env.NEXT_PUBLIC_API_URL as string; //development endpoint
  console.log("Fetching comments from:", devUrl);

  const res = await fetch(devUrl);
  // console.log('res', res);

if(!res){
  throw new Error(`Failed to fetch comments: ${res.statusText}`);
}

//   if (!res.ok) {
//     console.log("no fetch url");
//     const res = await fetch(devUrl);
// if(!res) {
//   throw new Error(`Failed to fetch comments: ${res.statusText}`);
// }   
//   }
    
  const json = await res.json(); // Directly parse JSON
  console.log("Fetched Comments:", json);

  return json;
}



  