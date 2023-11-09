// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import 'swiper/css';

// Defining type of props
interface propsType {
    img: string;
    link: string;
    name: string;
}

// Creating and exporting category game banner component as default
export default function CategoryGameBannerComponent({img, link, name}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link className={'block relative group rounded-[10px] h-[150px] overflow-hidden'} href={link}>
            <img className={'absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110'} src={img} alt={name} />
            <span>{name}</span>
        </Link>
    );
}