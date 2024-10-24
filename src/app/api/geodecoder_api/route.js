import { NextResponse } from 'next/server';
 

  
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

    const turl = `https://webhooks.semperhl.com/api/geodecoder`;
    //   

    let res = {};
    res.status = false;
    res.message = "Error geocoding. Please try again or contact us for assistance.";

    try {
		
		
		const response = await fetch(turl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(jdata)
        });
		const data = await response.text();
        
		
		

        if(response.status > 200){
            res.status = false;
            res.message = "Error geocoding. Please try again or contact us for assistance.";
            return await getResponse(request, res);
        }else{
            res.status = true;
            res.message = "geocoded successfully.";
            return await getResponse(request, res);
        }
	} catch (err) {
		console.log(err);
        return await getResponse(request, res);
	}

    
}