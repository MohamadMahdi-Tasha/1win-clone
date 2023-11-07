// Importing part
import {ReactNode} from "react";
import {Metadata} from "next";
import localFont from 'next/font/local'
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import HeaderComponent from "@/component/headerComponent";
import FooterComponent from "@/component/footerComponent";
import '@/app/index.css';

// Defining font (SF Pro)
const SFProFont:NextFontWithVariable = localFont({
    src: '../public/font/font-SFpro.ttf',
    weight: '400',
    variable: '--font-sf-pro'
})

// Creating and exporting metadata of page or pages
export const metadata:Metadata = {
    title: '1 WIN',
    description: 'Casino, bets and slots online. Bonus on your first deposit. Come in, enter the promo code and win now!',
    openGraph: {
        title: '1 WIN',
        description: 'Casino, bets and slots online. Bonus on your first deposit. Come in, enter the promo code and win now!',
        type: "website"
    },
    twitter:{
        title: '1 WIN',
        description: 'Casino, bets and slots online. Bonus on your first deposit. Come in, enter the promo code and win now!',
    }
}

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting root layout of page or pages as default
export default function RootLayout({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={`bg-theme ${SFProFont.variable} font-primary overflow-hidden`}>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    );
}