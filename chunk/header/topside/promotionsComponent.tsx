// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import PromotionsImage from '@/public/img/header/topside/img-promotions.png';

// Creating and exporting promotion components as default
export default function PromotionsComponent():ReactNode {
    // Returning JSX
    return (
        <a href={'#'}>
            <div><IconComponent name={'star-bag'} size={10} /></div>
            <span>Promotions and bounuses</span>
            <img src={PromotionsImage.src} alt="Promotions and bounuses"/>
        </a>
    );
}