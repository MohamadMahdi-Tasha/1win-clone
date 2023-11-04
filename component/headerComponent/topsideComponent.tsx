// Importing part
import {ReactNode} from "react";
import FreeMoneyComponent from "@/chunk/header/topside/freeMoneyComponent";
import IconButtonComponent from '@/chunk/header/topside/iconButtonComponent';
import PromotionsComponent from '@/chunk/header/topside/promotionsComponent';
import IconComponent from "@/chunk/iconComponent";
import LangDropdownComponent from "@/chunk/header/topside/langDropdownComponent";

// Creating and exporting top side of header component as default
export default function TopsideComponent():ReactNode {
    // Returning JSX
    return (
        <div className={'flex justify-between items-center gap-[20px] flex-wrap'}>
            <div className={'flex items-center gap-[10px]'}>
                <IconButtonComponent name={'lock'} />
                <IconButtonComponent name={'mobile'} />
                <div className={'w-[1px] h-[20px] bg-white/20'} />
                <FreeMoneyComponent />
            </div>
            <div className={'flex justify-between items-center gap-[20px] flex-wrap'}>
                <PromotionsComponent />
                <div className={'w-[1px] h-[20px] bg-white/20'} />
                <a href={'#'} className={'flex gap-[10px]'}>
                    <div>
                        <span className={'block text-white text-[12px]'}>Application</span>
                        <span className={'block text-white/50 text-[11px]'}>for Windows</span>
                    </div>
                    <span className={'text-white'}><IconComponent name={'windows'} size={30} /></span>
                </a>
                <div className={'flex gap-[5px] bg-white/10 transition-all duration-500 hover:bg-white/50 rounded-[5px]'}>
                    <a className={'w-[30px] aspect-square text-andriodLighterGreen flex items-center justify-center'} href="#"><IconComponent name={'android'} size={15} /></a>
                    <a className={'w-[30px] aspect-square text-gray-300 flex items-center justify-center'} href="#"><IconComponent name={'apple'} size={15} /></a>
                </div>
                <div className={'w-[1px] h-[20px] bg-white/20'} />
                <LangDropdownComponent />
            </div>
        </div>
    );
}