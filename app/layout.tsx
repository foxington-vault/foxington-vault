import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import dedent from "dedent"
import clsx from "clsx"
import Navbar from "@/components/Navbar"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--f-code" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(inter.className, jetbrains.variable)}>
      <body>
        <div id="tfv-root">
          <Navbar />
          {children}
        </div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="ga4">
          {dedent`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
        <Script id="clarity" defer>
          {dedent`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "CLARITY_ID");
        `}
        </Script>
      </body>
    </html>
  )
}
