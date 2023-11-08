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
        <Link href={link}>
            <IconComponent name={(icon === 'flame') ? 'flame-circle' : 'happy-face-circle'} size={20} />
            <div>
                <span>{name}</span>
                <span>{count}</span>
            </div>
        </Link>
    );
}