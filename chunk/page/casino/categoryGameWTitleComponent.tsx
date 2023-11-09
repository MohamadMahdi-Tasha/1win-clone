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
    threeSlides?: boolean;
}

// Creating and exporting category game with titles component as default
export default function CategoryGameWTitleComponent({title, children, count, allLink, threeSlides = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div className={'flex items-center justify-between gap-[20px] flex-wrap mb-[20px]'}>
                <div className={'flex gap-[10px] items-end'}>
                    <span className={'font-bold text-white text-[30px] block'}>{title}</span>
                    <span className={'text-white/50 text-[15px] block'}>{count}</span>
                </div>
                <div className={'flex items-center gap-[10px]'}>
                    <Link className={'text-[10px] text-lightBlue'} href={allLink}>All</Link>
                    <button className={'w-[30px] h-[30px] aspect-square flex justify-center items-center bg-lightTheme rounded-[5px] transition-all duration-500 hover:opacity-50'}>
                        <span className={'text-white -rotate-90'}><IconComponent name={'chevron'} size={12} /></span>
                    </button>
                    <button className={'w-[30px] h-[30px] aspect-square flex justify-center items-center bg-lightTheme rounded-[5px] transition-all duration-500 hover:opacity-50'}>
                        <span className={'text-white rotate-90'}><IconComponent name={'chevron'} size={12} /></span>
                    </button>
                </div>
            </div>
            <Swiper slidesPerGroup={(threeSlides) ? 3 : 4} slidesPerView={(threeSlides) ? 3 : 4}>
                {children}
            </Swiper>
        </div>
    );
}