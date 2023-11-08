// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import {Swiper} from "swiper/react";
import 'swiper/css';

// Defining type of props
interface propsType {
    title: string;
    count: number;
    children: ReactNode;
    allLink: string;
}

// Creating and exporting category game with titles component as default
export default function CategoryGameWTitleComponent({title, children, count, allLink}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <div>
                    <span>{title}</span>
                    <span>{count}</span>
                </div>
                <div>
                    <Link href={allLink}>All</Link>
                    <button><span><IconComponent name={'chevron'} size={12} /></span></button>
                    <button><span><IconComponent name={'chevron'} size={12} /></span></button>
                </div>
            </div>
            <Swiper spaceBetween={20} slidesPerGroup={4} slidesPerView={4}>
                {children}
            </Swiper>
        </div>
    );
}