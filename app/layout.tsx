// Importing part
import {ReactNode} from "react";
import {Metadata} from "next";

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
            <body className={'bg-theme'}>
                {children}
            </body>
        </html>
    );
}