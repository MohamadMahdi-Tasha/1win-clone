// Importing part
import {ReactNode} from "react";
import TopsideComponent from '@/component/headerComponent/topsideComponent';

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header>
            <div className={'max-w-container mx-auto p-[20px]'}>
                <TopsideComponent />
            </div>
        </header>
    );
}