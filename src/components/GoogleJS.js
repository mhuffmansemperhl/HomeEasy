
const GoogleJS = ({ ga_id }) => (
    <>
      <script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${ga_id}&libraries=places`}  type="text/javascript"></script>
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places&callback=initMap" type="text/javascript"></script> */}
      <script
        // dangerouslySetInnerHTML={{
        //   __html: `
            // window.dataLayer = window.dataLayer || [];
            // function gtag(){dataLayer.push(arguments);}
            // gtag('js', new Date());
    //   
            // gtag('config', '${ga_id}');
        //   `,
        // }}
      ></script>
    </>
  );
  export default GoogleJS;
