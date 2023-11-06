// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import BannerImage from '@/public/img/header/topside/img-download-dropdown.png';
import DownloadHoverDropdownComponent from "@/chunk/downloadHoverDropdownComponent";

// Creating and exporting download component as default
export default function DownloadComponent():ReactNode {
    // Returning JSX
    return (
        <div className={'relative group'}>
            <div className={'flex gap-[5px] bg-lightTheme transition-all duration-500 group-hover:opacity-50 rounded-[5px]'}>
                <a className={'w-[30px] aspect-square text-andriodLighterGreen flex items-center justify-center'} href="#"><IconComponent name={'android'} size={15} /></a>
                <a className={'w-[30px] aspect-square text-gray-300 flex items-center justify-center'} href="#"><IconComponent name={'apple'} size={15} /></a>
            </div>
            <DownloadHoverDropdownComponent />
        </div>
    );
}