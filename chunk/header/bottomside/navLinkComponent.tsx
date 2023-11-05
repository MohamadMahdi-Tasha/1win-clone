// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining props type
interface propsType {
    name: string;
    isImg?: boolean;
    imgSrc?: string;
}

// Creating and exporting nav link components as default
export default function NavLinkComponent({name, isImg = false, imgSrc}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={'#'}>
                {
                    (isImg)
                        ? <img src={imgSrc} alt={name} />
                        : <span>{name}</span>
                }
            </Link>
        </li>
    );
}