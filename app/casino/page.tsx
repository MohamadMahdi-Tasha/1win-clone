// Importing part
import {ReactNode} from 'react';
import LeftSideNavComponent from "@/component/page/casino/leftSideNavComponent";
import MainSideComponent from "@/component/page/casino/mainSideComponent";

// Creating and exporting casino page as default
export default function CasinoPage():ReactNode {
    // Returning JSX
    return (
        <section className={'container grid grid-cols-4 gap-[20px]'}>
            <LeftSideNavComponent />
            <MainSideComponent />
        </section>
    );
}