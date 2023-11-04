// Importing part
import {ReactNode} from "react";
import FreeMoneyImg from '@/public/img/header/topside/img-free-money.png';
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting free money component as default
export default function FreeMoneyComponent():ReactNode {
    // Returning JSX
    return (
        <a className={'bg-gradient-to-r from-lighterYellow to-yellow rounded-[50rem] h-[30px] pl-[70px] pr-[12px] items-center justify-between gap-[10px] relative flex'} href={'#'}>
            <img className={'absolute left-0 bottom-0 translate-y-[20%] w-[70px]'} src={FreeMoneyImg.src} alt="Free money !" />
            <span className={'text-theme text-[10px] whitespace-nowrap'}>Free Money!</span>
            <IconComponent name={'arrow-right'} size={10} />
        </a>
    );
}