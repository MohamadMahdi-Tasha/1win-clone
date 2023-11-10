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
        <Link className={'block group'} href={link}>
            <div className={'lg:h-[150px] h-[120px] rounded-[10px] overflow-hidden w-full relative lg:mb-0 mb-[10px]'}>
                <img className={'absolute top-0 left-0 group-hover:scale-110 transition-all duration-500 w-full h-full object-cover'} src={img} alt={name} />
            </div>
            <span className={'text-white text-[12px] truncate lg:hidden block'}>{name}</span>
        </Link>
    );
}