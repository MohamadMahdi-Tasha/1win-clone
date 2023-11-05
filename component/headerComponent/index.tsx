// Importing part
import {ReactNode} from "react";
import TopsideComponent from '@/component/headerComponent/topsideComponent';
import BottomsideComponent from "@/component/headerComponent/bottomsideComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header>
            <div className={'max-w-container mx-auto p-[20px]'}>
                <TopsideComponent />
            </div>
            <div className={'max-w-container mx-auto mt-[20px] px-[20px] sticky top-0'}>
                <BottomsideComponent />
            </div>
        </header>
    );
}