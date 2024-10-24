import { NextResponse } from 'next/server';
 
// export const runtime = 'edge'; // 'nodejs' is the default


  
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
    
    
    const turl = 'https://services.leadconnectorhq.com/hooks/aA5Ml5eBBmwBv6xcHLl8/webhook-trigger/74728811-35e1-402c-a888-1752423f0950';
    

    let res = {};
    res.status = false;
    res.message = "Error creating account. Please try again or contact us for assistance.";

    try {
		
		
		const response = await fetch(turl, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer pat-na1-33cf6163-5250-4aa6-bb18-77804d1a2bc2', 'Content-Type': 'application/json' },
            // body: "" + urlparams
            body: JSON.stringify(jdata)
        });
		const data = await response.text();
        
		
		

        if(response.status > 200){
            res.status = false;
            res.message = "Error adding contact. Please try again or contact us for assistance.";
            return await getResponse(request, res);
        }else{
            res.status = true;
            res.message = "Contact created successfully.";
            return await getResponse(request, res);
        }
	} catch (err) {
		console.log(err);
        return await getResponse(request, res);
	}







    
}