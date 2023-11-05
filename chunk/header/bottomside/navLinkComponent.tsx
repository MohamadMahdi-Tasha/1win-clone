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
            <Link href={'#'} className={'flex justify-center items-center w-[50px]'}>
                {
                    (isImg)
                        ? <img className={'w-full'} src={imgSrc} alt={name} />
                        : <span className={'block text-[12px] text-white truncate'}>{name}</span>
                }
            </Link>
        </li>
    );
}