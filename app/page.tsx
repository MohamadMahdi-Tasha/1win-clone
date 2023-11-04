// Importing part
import {ReactNode} from "react";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <section>
            <main className={'flex justify-center items-center min-h-screen max-w-container mx-auto p-[20px]'}>
                <h1 className={'lg:text-[30px] text-[20px] text-white text-center font-black tracking-widest'}>HOME PAGE</h1>
            </main>
        </section>
    );
}