// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    img: string;
    price: number;
    gameTitle: string;
    email: string;
    link: string;
    isActive: boolean;
}

// Creating and exporting recent wins component as default
export default function RecentWinsComponent({email, gameTitle, price, img, link, isActive}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link data-active={isActive} href={link} className={'w-[120px] p-[5px] rounded-[10px] block data-[active="false"]:bg-lightTheme data-[active="true"]:bg-gradient-to-b from-orange-500 to-pink-700'}>
                <img className={'h-[75px] w-full object-cover rounded-[10px] mb-[5px]'} src={img} alt="Game image"/>
                <div className={'w-full overflow-hidden'}>
                    <span className={'block text-white truncate text-[12px]'}>{price.toLocaleString()}$</span>
                    <span className={'block text-white truncate text-[10px]'}>{gameTitle}</span>
                    <span className={'block text-white/70 truncate text-[10px]'}>{email}</span>
                </div>
            </Link>
        </li>
    );
}