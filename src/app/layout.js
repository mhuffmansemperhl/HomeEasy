import Head from 'next/head';
import './globals.scss'
import GTAnalytics from '@/components/GTAnalytics';
import { GtmAnalytics } from '@/components/GtmAnalytics';
import Script from 'next/script';

export const metadata = {
  title: 'HomeEasy Homes',
  description: 'HomeEasy Homes by Semper Home Loans',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
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
       

        </Head> 

      <body>
         <Script
         type='text/javascript'
        id="clickcease-script" // Unique ID for the script
        strategy="afterInteractive" // Loads the script after the page becomes interactive
        dangerouslySetInnerHTML={{
          __html: `
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            var target = 'https://www.clickcease.com/monitor/stat.js';
            script.src = target;
            var elem = document.head;
            elem.appendChild(script);
          `,
        }}
      />
      <noscript>
      <a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com' alt='ClickCease'/></a>
      </noscript>
      <img src='https://rdcdn.com/rt?aid=26956&e=1&img=1' height='1' width='1' style={{position: "absolute"}} referrerpolicy='no-referrer-when-downgrade' />
      <img src='https://rdcdn.com/rt?aid=26957&e=1&img=1' height='1' width='1' style={{position: "absolute"}} referrerpolicy='no-referrer-when-downgrade' />
        <GTAnalytics />
        <GtmAnalytics />
        {children}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2761640.js"></script>
       </body>
    </html>
  )
}
