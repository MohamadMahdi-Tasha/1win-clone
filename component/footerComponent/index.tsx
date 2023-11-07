// Importing part
import {ReactNode} from "react";
import TopSideComponent from "@/component/footerComponent/topSideComponent";
import MiddleSideComponent from "@/component/footerComponent/middleSideComponent";
import BottomSideComponent from "@/component/footerComponent/bottomSideComponent";

// Creating and exporting footer component as default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer className={'max-w-container mx-auto p-[20px]'}>
            <TopSideComponent />
            <div className={'gradiant-divider lg:block hidden'} />
            <MiddleSideComponent />
            <div className={'gradiant-divider'} />
            <BottomSideComponent />
        </footer>
    );
}