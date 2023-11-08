// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import ColorfullIconComponent from "@/chunk/colorfullIconComponent";

// Defining type of props
interface propsType {
    icon: 'square';
    title: string;
    count: number;
    link: string;
}

// Creating and exporting category game component as default
export default function CategoryGameComponent({count, link, title, icon}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={link} className={'py-[10px] px-[20px] gap-[10px] flex items-center justify-between transition-all duration-500 hover:bg-white/10'}>
                <div className={'flex gap-[10px] w-[75%]'}>
                    <ColorfullIconComponent name={(icon === 'square') ? 'square-with-4-items' : icon} size={25} />
                    <span className={'text-white text-[13px] truncate block w-full'}>{title}</span>
                </div>
                <div className={'w-[25%] flex justify-end items-center'}>
                    <span className={'text-[10px] text-white/50'}>{count}</span>
                </div>
            </Link>
        </li>
    );
}