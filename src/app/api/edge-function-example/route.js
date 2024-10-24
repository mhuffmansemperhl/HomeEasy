import { NextResponse } from 'next/server';
 
// export const runtime = 'edge'; // 'nodejs' is the default

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

// function getResponse(request, res){
//     return new Promise(resolve => {
//         NextResponse.json(
//             {
//               body: res,
//               path: request.nextUrl.pathname,
//               query: request.nextUrl.search,
//               cookies: request.cookies.getAll(),
//             },
//             {
//               status: 200,
//             },
//           )
//     });
// }
  
function getResponse(request, res){
    return NextResponse.json(
        {
          body: res,
          path: request.nextUrl.pathname,
          query: request.nextUrl.search,
          cookies: request.cookies.getAll(),
        },
        {
          status: 200,
        },
      );
}  

export async function POST(request, response) {
    
    let jdata = await new Response(request.body).json();
    
    const urlparams = new URLSearchParams(jdata.params);
    const turl = `https://api.idxbroker.com/leads/lead`;
      

    let res = {};
    res.status = false;
    res.message = "Error creating account. Please try again or contact us for assistance.";

    try {
		
		const response = await fetch(turl, {
            method: 'PUT',
            headers: { 'accesskey': 'rqEquc-z9Lt@nyiFT@Ghnc', 'Content-Type': 'application/x-www-form-urlencoded' },
            body: "" + urlparams
        });
		const data = await response.text();
        
		
		

        if(response.status > 200){
            res.status = false;
            res.message = "Error creating account. Please try again or contact us for assistance.";
            return await getResponse(request, res);
        }else{
            res.status = true;
            res.message = "Account created successfully.";
            return await getResponse(request, res);
        }
	} catch (err) {
		console.log(err);
        return await getResponse(request, res);
	}


   }