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
        <Link href={link}>
            <img src={img} alt={name} />
            <span>{name}</span>
        </Link>
    );
}