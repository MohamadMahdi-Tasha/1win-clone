// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    img: string;
    price: number;
    gameTitle: string;
    email: string;
}

// Creating and exporting recent wins component as default
export default function RecentWinsComponent({email, gameTitle, price, img}:propsType):ReactNode {
    // Returning JSX
    return (
        <li className={'w-[120px] bg-lightTheme p-[5px] rounded-[10px]'}>
            <img className={'h-[75px] w-full object-cover rounded-[10px] mb-[5px]'} src={img} alt="Game image"/>
            <div className={'w-full overflow-hidden'}>
                <span className={'block text-white truncate text-[12px]'}>{price.toLocaleString()}$</span>
                <span className={'block text-white truncate text-[10px]'}>{gameTitle}</span>
                <span className={'block text-white/70 truncate text-[10px]'}>{email}</span>
            </div>
        </li>
    );
}