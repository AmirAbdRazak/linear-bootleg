import {Head, Html, Main, NextScript} from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700&display=swap"
                    rel="stylesheet"/>
                <Script src="https://kit.fontawesome.com/d294f8dcf0.js" crossOrigin="anonymous"></Script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}