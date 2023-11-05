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
            <Link className={`block px-[10px] w-full py-[5px] bg-white duration-500 transition-all hover:bg-gray-300 ${(isNew) ? 'flex justify-between items-center gap-[10px]' : false}`} href={link}>
                <span className={'truncate block text-[12px] text-theme'}>{name}</span>
                {
                    (isNew)
                        ? <span className={'bg-gradient-to-r from-violet to-lightBlue block text-[10px] text-white px-[10px] py-[3px] rounded-[5px]'}>NEW</span>
                        : false
                }
            </Link>
        </li>
    );
}