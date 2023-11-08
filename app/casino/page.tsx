// Importing part
import {ReactNode} from 'react';
import LeftSideNavComponent from "@/component/page/casino/leftSideNavComponent";

// Creating and exporting casino page as default
export default function CasinoPage():ReactNode {
    // Returning JSX
    return (
        <section>
            <main className={'container'}>
                <LeftSideNavComponent />
            </main>
        </section>
    );
}