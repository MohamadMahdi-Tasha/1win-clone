// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useEffect, useState} from "react";
import FreeMoneyComponent from "@/chunk/header/topside/freeMoneyComponent";
import IconButtonComponent from '@/chunk/header/topside/iconButtonComponent';
import PromotionsComponent from '@/chunk/header/topside/promotionsComponent';
import IconComponent from "@/chunk/iconComponent";
import LangDropdownComponent from "../../chunk/langDropdownComponent";
import DownloadComponent from '@/chunk/header/topside/downloadComponent';
import Link from "next/link";
import Image from "next/image";
import LogoTypoImage from "@/public/img/img-logo-typo.svg";
import EnImage from "@/public/img/flags/img-en.svg";
import MobileNavComponent from "@/component/mobileNav";
import {usePathname} from "next/navigation";

// Creating and exporting top side of header component as default
export default function TopSideComponent():ReactNode {
    // Finding pathname of url
    const pathName:string = usePathname();

    // Defining state of component
    const [isMobileNavOpened, setMobileNavOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Using useEffect hook to close nav when pages change
    useEffect(() => setMobileNavOpened(false), [pathName])

    // Using useEffect hook to removing overflow from body to prevent scrolling
    useEffect(() => {
        (isMobileNavOpened)
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [isMobileNavOpened])

    // Returning JSX
    return (
        <div className={'flex justify-between items-center gap-[20px] flex-wrap'}>
            <div className={'lg:hidden flex items-center gap-[10px]'}>
                <Link href="#"><Image className={'w-[70px] h-auto'} src={LogoTypoImage.src} alt={'Logo'} width={200} height={100} /></Link>
                <img className={'w-[20px] h-[20px] aspect-square rounded-full'} src={EnImage.src} alt="Uk Flag" />
            </div>
            <div className={'lg:flex hidden items-center gap-[10px]'}>
                <IconButtonComponent name={'lock'} />
                <IconButtonComponent name={'mobile'} />
                <div className={'w-[1px] h-[20px] bg-white/20'} />
                <FreeMoneyComponent />
            </div>
            <div className={'lg:flex hidden justify-between items-center gap-[20px] flex-wrap'}>
                <PromotionsComponent />
                <div className={'w-[1px] h-[20px] bg-white/20'} />
                <a href={'#'} className={'flex gap-[10px] peer'}>
                    <div>
                        <span className={'block text-white text-[12px]'}>Application</span>
                        <span className={'block text-white/50 text-[11px]'}>for Windows</span>
                    </div>
                    <span className={'text-white'}><IconComponent name={'windows'} size={30} /></span>
                </a>
                <DownloadComponent />
                <div className={'w-[1px] h-[20px] bg-white/20'} />
                <LangDropdownComponent position={'bottom'} />
            </div>
            <button onClick={() => setMobileNavOpened(true)} className={'lg:hidden flex items-center justify-center aspect-square w-[50px] h-[50px] text-white'}>
                <IconComponent name={'list'} size={20} />
            </button>
            <MobileNavComponent isOpened={isMobileNavOpened} closeFN={() => setMobileNavOpened(false)} />
        </div>
    );
}