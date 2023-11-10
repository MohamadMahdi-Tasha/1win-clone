// Importing part
import {ReactNode} from 'react';
import LeftSideNavComponent from "@/component/page/casino/leftSideNavComponent";
import MainSideComponent from "@/component/page/casino/list/mainSideComponent";

// Creating and exporting lists of casino page as default
export default function ListCasinoPage():ReactNode {
    // Returning JSX
    return (
        <section className={'container lg:grid grid-cols-4 gap-[20px]'}>
            <LeftSideNavComponent />
            <MainSideComponent />
        </section>
    );
}