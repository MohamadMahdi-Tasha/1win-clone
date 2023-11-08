// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";

// Defining type of props
interface propsType {
    name: 'heated' | 'popular';
    icon: 'flame' | 'happy-face';
    theme: 'pink' | 'green';
    count: number;
    link: string;
}

// Creating and exporting category details component as default
export default function CategoryDetailsComponent({count, name, theme, icon, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} data-theme={theme} className={'w-[50%] bg-gradient-to-r data-[theme="green"]:from-green/50 data-[theme="pink"]:from-violet/50 to-theme p-[10px] rounded-[10px] flex items-center gap-[10px] flex-wrap transition-all duration-500 hover:opacity-50'}>
            <IconComponent name={(icon === 'flame') ? 'flame-circle' : 'happy-face-circle'} size={20} />
            <div>
                <span className={'block text-white font-bold text-[10px] truncate'}>{name}</span>
                <span className={'block text-white/50 text-[10px] truncate'}>{count}</span>
            </div>
        </Link>
    );
}