// Importing part
import {ReactNode} from "react";
import TopsideComponent from '@/component/headerComponent/topsideComponent';
import BottomsideComponent from "@/component/headerComponent/bottomsideComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <>
            <header>
                <div className={'max-w-container mx-auto p-[20px]'}>
                    <TopsideComponent />
                </div>
            </header>
            <div className={'lg:sticky top-0 left-0 w-full'}>
                <div className={'max-w-container mx-auto px-[20px] lg:border-y-0 border-y border-y-white/20 lg:py-0 py-[20px]'}>
                    <BottomsideComponent />
                </div>
            </div>
        </>
    );
}