// Importing part
import {ReactNode} from "react";
import Image from 'next/image';
import Link from 'next/link';
import LinkDropdownComponent from '@/chunk/header/bottomside/linkDropdown';
import IconComponent from "@/chunk/iconComponent";
import LogoTypoImage from '@/public/img/img-logo-typo.svg';
import LuckyGameImage from '@/public/img/header/bottomside/games/img-lucky.svg';
import SpeedGameImage from '@/public/img/header/bottomside/games/img-speed.svg';
import AvaitorGameImage from '@/public/img/header/bottomside/games/img-avaitor.svg';
import JetXGameImage from '@/public/img/header/bottomside/games/img-jetx.svg';
import NavLinkComponent from '@/chunk/header/bottomside/navLinkComponent';
import EnImage from '@/public/img/flags/img-en.svg';

// Creating and exporting bottom side od header component as default
export default function BottomsideComponent():ReactNode {
    // Returning JSX
    return (
        <nav className={'flex justify-between gap-[10px] items-center mt-[20px] bg-gradient-to-r from-lightTheme to-theme rounded-[20px] p-[10px]'}>
            <div className={'flex items-center gap-[20px] shrink-0'}>
                <div className={'flex items-center gap-[10px]'}>
                    <Link href="#"><Image className={'w-[70px] h-auto'} src={LogoTypoImage.src} alt={'Logo'} width={200} height={100} /></Link>
                    <img className={'w-[20px] h-[20px] aspect-square rounded-full'} src={EnImage.src} alt="Uk Flag" />
                </div>
                <ul className={'flex items-center gap-[20px]'}>
                    <NavLinkComponent name={'Home'} />
                    <NavLinkComponent name={'Live'} />
                    <NavLinkComponent name={'Sports'} />
                    <NavLinkComponent name={'Casino'} />
                    <NavLinkComponent name={'Live-games'} />
                    <NavLinkComponent isImg name={"Lucky game"} imgSrc={LuckyGameImage.src} />
                    <NavLinkComponent isImg name={"Speed game"} imgSrc={SpeedGameImage.src} />
                    <NavLinkComponent isImg name={"Avaitor game"} imgSrc={AvaitorGameImage.src} />
                    <NavLinkComponent isImg name={"JetX game"} imgSrc={JetXGameImage.src} />
                    <LinkDropdownComponent />
                </ul>
            </div>
            <div className={'flex items-center gap-[10px] shrink-0'}>
                <Link className={'bg-white/10 hover:opacity-50 px-[15px] py-[5px] text-[12px] rounded-[5px] text-white transition-all duration-500'} href={'#'}>
                    Login
                </Link>
                <Link className={'flex items-center bg-gradient-to-r from-green hover:opacity-50 to-darkerGreen px-[15px] py-[5px] rounded-[5px] transition-all duration-500 text-white text-[12px] gap-[10px]'} href={'#'}>
                    <span className={'bg-gradient-to-b flex justify-center items-center w-[20px] h-[20px] from-transparent to-white/50 rounded-full'}>
                        <IconComponent name={'plus'} size={10} />
                    </span>
                    Registration
                </Link>
            </div>
        </nav>
    );
}