// Importing part
import {ReactNode} from "react";
import {Metadata} from "next";

// Creating and exporting metadata of page or pages
export const metadata:Metadata = {
    title: '1 WIN',
    openGraph: {
        title: 'Coffee Catch Up - Daily blog app',
        description: 'Coffee Catch Up is daily my (Mahdi Tasha) daily weblog :))',
        type: "website"
    },
    twitter:{
        title: 'Coffee Catch Up - Daily blog app',
        description: 'Coffee Catch Up is daily my (Mahdi Tasha) daily weblog :))',
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