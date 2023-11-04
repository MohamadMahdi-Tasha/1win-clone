// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import PromotionsImage from '@/public/img/header/topside/img-promotions.png';

// Creating and exporting promotion components as default
export default function PromotionsComponent():ReactNode {
    // Returning JSX
    return (
        <a className={'h-[30px] flex justify-between relative pr-[60px] items-center rounded-[50rem] bg-white/10'} href={'#'}>
            <div className={'h-[40px] w-[40px] aspect-square mr-[10px] flex justify-center items-center text-white rounded-full bg-gradient-to-r from-violet to-lightBlue'}>
                <IconComponent name={'star-bag'} size={15} />
            </div>
            <span className={'text-[10px] text-white'}>Promotions and bounuses</span>
            <img className={'w-[70px] absolute right-0 -top-[70%] translate'} src={PromotionsImage.src} alt="Promotions and bounuses"/>
        </a>
    );
}