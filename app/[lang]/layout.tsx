import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Navbarmobile } from "@/components/Navbar-mobile";
import { ThemeProvider } from "@/components/Theme-provider";
import { i18n, type Locale } from "../../i18n-config"
import { Siteconfig } from "@/config/site";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tool finder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
    <body id='body' className={inter.className}>
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <div className='fixed top-0 z-50 '>
      <Navbarmobile lang ={params.lang}/>
      <Navbar lang ={params.lang} />
        </div>
      <div className='container mt-28'>
      {children}
      </div>
      <Footer lang={params.lang}/>
      </ThemeProvider>
    </body>
  </html>
  );
}
