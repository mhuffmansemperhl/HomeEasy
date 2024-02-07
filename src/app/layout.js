import Head from 'next/head';
import './globals.scss'
import GTAnalytics from '@/components/GTAnalytics';

export const metadata = {
  title: 'HomeEasy Homes',
  description: 'HomeEasy Homes by Semper Home Loans',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
      {/* <link rel="stylesheet" href="https://use.typekit.net/uit5jbu.css" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2761640.js"></script> */}

        {/* <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXX');`,
    }}
  /> */}


        {/* <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-53ZZRQW4');`,
    }}
  /> */}

  {/* <script
    dangerouslySetInnerHTML={{
      __html: `window.doEventClick = function(options){
        console.log("going doEventClick");
          if("event_name" in options){
            if("callback_function" in options) {
              console.log(\`sending (with function callback): \${options.event_name}\`);
              window.dataLayer.push({
                'event': options.event_name,
                'eventCallback': ()=>{options.callback_function();}
              });
            } else if("event_location_tab" in options){
              console.log(\`sending (with redirect to new tab): \${options.event_name}\`);
              window.dataLayer.push({
                'event': options.event_name,
                'eventCallback': ()=>{window.open(options.event_location_tab, "_blank").focus();}
              });
            } else if("event_location" in options){
              console.log(\`sending (with redirect to same tab): \${options.event_name}\`);
              window.dataLayer.push({
                'event': options.event_name,
                'eventCallback': ()=>{window.document.location.href = options.event_location;}
              });
            }else{
              console.log(\`sending (without redirect): \${options.event_name}\`);
              window.dataLayer.push({
                'event': options.event_name,
                'eventCallback': ()=>{}
              });
            }
      
          }
      
        }`,
    }}
  /> */}

        </Head> 

      <body>
        <GTAnalytics />
        {children}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2761640.js"></script>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53ZZRQW4" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
      </body>
    </html>
  )
}
