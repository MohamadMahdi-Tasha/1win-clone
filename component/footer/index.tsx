// Importing part
import {ReactNode} from "react";
import TopSideComponent from "@/component/footer/topSideComponent";
import MiddleSideComponent from "@/component/footer/middleSideComponent";

// Creating and exporting footer component as default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer className={'max-w-container mx-auto p-[20px]'}>
            <TopSideComponent />
            <div className={'gradiant-divider'} />
            <MiddleSideComponent />
            <div className={'gradiant-divider'} />
        </footer>
    );
}