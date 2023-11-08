// Importing part
import {ReactNode} from 'react';
import LeftSideNavComponent from "@/component/page/casino/leftSideNavComponent";

// Creating and exporting casino page as default
export default function CasinoPage():ReactNode {
    // Returning JSX
    return (
        <section>
            <main className={'container grid grid-cols-4 gap-[20px]'}>
                <LeftSideNavComponent />
                <div className={'bg-red-600 col-span-3'} />
            </main>
        </section>
    );
}