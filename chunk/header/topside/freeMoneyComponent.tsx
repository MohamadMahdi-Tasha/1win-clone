// Importing part
import {ReactNode} from "react";
import FreeMoneyImg from '@/public/img/header/topside/img-free-money.png';
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting free money component as default
export default function FreeMoneyComponent():ReactNode {
    // Returning JSX
    return (
        <a href={'#'}>
            <img src={FreeMoneyImg.src} alt="Free money !" />
            <span>Free Money!</span>
            <IconComponent name={'arrow-right'} size={10} />
        </a>
    );
}