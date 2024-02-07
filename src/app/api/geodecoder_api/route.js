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
    // console.log(request.body.text);
    // const { body } = request;
    // console.log(body);
    let jdata = await new Response(request.body).json();
    console.log(jdata);
    // const urlparams = new URLSearchParams(jdata.params);
    // const turl = `https://api.idxbroker.com/leads/lead?` + urlparams;
    // const turl = `https://api.idxbroker.com/leads/lead`;
    const turl = `https://webhooks.semperhl.com/api/geodecoder`;
    // console.log(turl);  

    let res = {};
    res.status = false;
    res.message = "Error geocoding. Please try again or contact us for assistance.";

    try {
		// const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
		// const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
		const response = await fetch(turl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(jdata)
        });
		const data = await response.text();
        
		console.log(data);
		console.log(response.status);

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