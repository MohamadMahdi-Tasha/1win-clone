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
            <Link href={link}>
                <div>
                    <ColorfullIconComponent name={(icon === 'square') ? 'square-with-4-items' : icon} size={15} />
                    <span>{title}</span>
                </div>
                <span>{count}</span>
            </Link>
        </li>
    );
}