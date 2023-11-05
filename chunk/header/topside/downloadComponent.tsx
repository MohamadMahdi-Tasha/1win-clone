// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import BannerImage from '@/public/img/header/topside/img-download-dropdown.png';

// Creating and exporting download component as default
export default function DownloadComponent():ReactNode {
    // Returning JSX
    return (
        <div className={'relative group'}>
            <div className={'flex gap-[5px] bg-white/10 transition-all duration-500 group-hover:bg-white/50 rounded-[5px]'}>
                <a className={'w-[30px] aspect-square text-andriodLighterGreen flex items-center justify-center'} href="#"><IconComponent name={'android'} size={15} /></a>
                <a className={'w-[30px] aspect-square text-gray-300 flex items-center justify-center'} href="#"><IconComponent name={'apple'} size={15} /></a>
            </div>
            <div className={'absolute top-[150%] left-[50%] -translate-x-[50%] bg-white rounded-[10px] w-[300px] shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-500 before-triangle invisible'}>
                <img className={'w-full mb-[10px]'} src={BannerImage.src} alt="Download now !" />
                <div className={'p-[10px]'}>
                    <p className={'text-black text-[12px] text-center'}>Visit the site from your smartphone, <br/> install the application right now and <br/> get $100 to the bonus account!</p>
                </div>
            </div>
        </div>
    );
}