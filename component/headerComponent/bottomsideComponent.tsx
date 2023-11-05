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
        <nav className={'flex lg:flex-row flex-col-reverse justify-between gap-[10px] lg:items-center lg:bg-gradient-to-r bg-theme from-lightTheme to-theme lg:rounded-[10px] lg:p-[10px]'}>
            <div className={'flex items-center gap-[20px] shrink-0'}>
                <div className={'lg:flex hidden items-center gap-[10px]'}>
                    <Link href="#"><Image className={'w-[70px] h-auto'} src={LogoTypoImage.src} alt={'Logo'} width={200} height={100} /></Link>
                    <img className={'w-[20px] h-[20px] aspect-square rounded-full'} src={EnImage.src} alt="Uk Flag" />
                </div>
                <div className={'flex w-full items-center gap-[20px]'}>
                    <div className={'w-[90%] relative'}>
                        <div className={'absolute lg:hidden block top-0 h-full left-0 w-[100px] pointer-events-none bg-gradient-to-l from-transparent to-theme'} />
                        <div className={'absolute lg:hidden block top-0 h-full right-0 w-[100px] pointer-events-none bg-gradient-to-r from-transparent to-theme'} />
                        <ul className={'flex items-center gap-[20px] lg:overflow-visible overflow-auto w-full no-scroll lg:px-0 px-[50px]'}>
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
                            <li>
                                <ul className={'lg:hidden flex gap-[20px]'}>
                                    <NavLinkComponent name={'Cybersport'} />
                                    <NavLinkComponent name={'Fantasy sport'} />
                                    <NavLinkComponent name={'Bat Games'} />
                                    <NavLinkComponent name={'Twain sport'} />
                                    <NavLinkComponent name={'TVBET'} />
                                    <NavLinkComponent name={'1win games'} />
                                    <NavLinkComponent name={'Statistics'} />
                                    <NavLinkComponent name={'Results'} />
                                    <NavLinkComponent name={'Cases'} />
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button className={'w-[10%] h-[50px] bg-theme lg:hidden flex  justify-center items-center text-white'}>
                        <IconComponent name={'search'} size={10} />
                    </button>
                </div>
            </div>
            <div className={'flex lg:w-auto w-full items-center gap-[10px] shrink-0 '}>
                <Link className={'lg:bg-white/10 bg-blue-500 block lg:w-auto text-center w-[50%] hover:opacity-50 px-[15px] py-[5px] text-[12px] rounded-[5px] text-white transition-all duration-500'} href={'#'}>
                    Login
                </Link>
                <Link className={'lg:flex block items-center text-center bg-gradient-to-r lg:w-auto w-[50%] from-green hover:opacity-50 to-darkerGreen px-[15px] py-[5px] rounded-[5px] transition-all duration-500 text-white text-[12px] gap-[10px]'} href={'#'}>
                    <span className={'bg-gradient-to-b lg:flex hidden justify-center items-center w-[20px] h-[20px] from-transparent to-white/50 rounded-full'}>
                        <IconComponent name={'plus'} size={10} />
                    </span>
                    Registration
                </Link>
            </div>
        </nav>
    );
}