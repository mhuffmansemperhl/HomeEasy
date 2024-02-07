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

    // console.log(request.body.text);
    // const { body } = request;
    // console.log(body);
    console.log("...doing hubspot post here")
    let jdata = await new Response(request.body).json();
    console.log(jdata);
    // const urlparams = new URLSearchParams(jdata.params);
    // const turl = `https://api.idxbroker.com/leads/lead?` + urlparams;
    // const turl = `https://api.idxbroker.com/leads/lead`;
    // const turl = 'https://api.hubapi.com/crm/v3/objects/contacts';
    const turl = 'https://services.leadconnectorhq.com/hooks/aA5Ml5eBBmwBv6xcHLl8/webhook-trigger/74728811-35e1-402c-a888-1752423f0950';
    console.log(turl);

    let res = {};
    res.status = false;
    res.message = "Error creating account. Please try again or contact us for assistance.";

    try {
		// const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
		// const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
		const response = await fetch(turl, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer pat-na1-33cf6163-5250-4aa6-bb18-77804d1a2bc2', 'Content-Type': 'application/json' },
            // body: "" + urlparams
            body: JSON.stringify(jdata)
        });
		const data = await response.text();
        
		console.log(data);
		console.log(response.status);

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







    // let body = '';

    // request.on('data', data => {
    //   body += data;
    // });

    // request.on('end', () => {
    //   console.log(body); // do stuff here
    // });    
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' }        
    // };
    // const urlparams = new URLSearchParams({
    //   firstName: 'Mike',
    //   lastName: 'Huffman',
    //   email: 'mhuffman@semperhl.com'
    // });
    // fetch('https://api.idxbroker.com/leads/lead?' + urlparams, requestOptions)
    // .then(response => {
    //   console.log(response.status);
    //   console.log(response);
    //   // response.json()

    //   // nextStep(pathname, router, searchParams);

    // });

    // const result = await resolveAfter2Seconds();

    // return NextResponse.json(
    //         {
    //             body: request.body,
    //             path: request.nextUrl.pathname,
    //             query: request.nextUrl.search,
    //             cookies: request.cookies.getAll(),
    //           },
    //           {
    //             status: 200,
    //           },
    //         );
}