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
        <li>
            <img src={img} alt="Game image"/>
            <span>{price.toLocaleString()}$</span>
            <span>{gameTitle}</span>
            <span>{email}</span>
        </li>
    );
}