// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining props type
interface propsType {
    name: string;
    isImg?: boolean;
    imgSrc?: string;
    isActive: boolean;
}

// Creating and exporting nav link components as default
export default function NavLinkComponent({name, isImg = false, imgSrc, isActive}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={'#'} data-active={isActive} className={`${(isImg) ? 'block lg:w-[50px] w-[100px]' : 'lg:flex block lg:px-0 lg:py-0 lg:rounded-0 px-[10px] py-[5px] rounded-[50rem] justify-center items-center lg:w-[50px]'} lg:data-[active="true"]:bg-transparent data-[active="true"]:bg-blue lg:data-[active="true"]:shadow-none data-[active="true"]:shadow-blueNeon`}>
                {
                    (isImg)
                        ? <img className={'w-full'} src={imgSrc} alt={name} />
                        : <span className={'block text-[12px] text-white lg:truncate whitespace-nowrap'}>{name}</span>
                }
            </Link>
        </li>
    );
}