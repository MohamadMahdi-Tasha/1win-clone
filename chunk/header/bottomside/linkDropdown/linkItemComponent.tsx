// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    isNew?: boolean;
    name: string;
    link: string;
}

// Creating and exporting link items as default
export default function LinkItemComponent({isNew = false, name, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={link}>
                {name}
                {
                    (isNew)
                        ? <span>NEW</span>
                        : false
                }
            </Link>
        </li>
    );
}