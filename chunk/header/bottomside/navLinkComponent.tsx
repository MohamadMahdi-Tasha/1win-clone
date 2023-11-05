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
            <Link href={'#'} className={(isImg) ? 'block lg:w-[50px] w-[100px]' : 'lg:flex justify-center items-center lg:w-[50px]'}>
                {
                    (isImg)
                        ? <img className={'w-full'} src={imgSrc} alt={name} />
                        : <span className={'block text-[12px] text-white lg:truncate whitespace-nowrap'}>{name}</span>
                }
            </Link>
        </li>
    );
}