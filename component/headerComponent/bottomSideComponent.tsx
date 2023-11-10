// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, MutableRefObject, ReactNode, useEffect, useRef, useState} from "react";
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
import {usePathname} from "next/navigation";

// Defining type of props
interface propsType {
    isStickedToTop: boolean;
}

// Creating and exporting bottom side od header component as default
export default function BottomSideComponent({isStickedToTop}:propsType):ReactNode {
    // Finding pathname of url
    const pathName:string = usePathname();

    // Defining the active page indicator
    const activeIndicatorRef:MutableRefObject<any> = useRef();

    // Using useEffect to change position of active page indicator when pages change
    useEffect(() => {
        const activeIndicator:HTMLDivElement = activeIndicatorRef.current;

        if (pathName === '/') {
            activeIndicator.style.left = '0';
        } else if (pathName === '/live') {
            activeIndicator.style.left = '70px';
        } else if (pathName.includes('/sports')) {
            activeIndicator.style.left = '140px';
        } else if (pathName.includes('/casino')) {
            activeIndicator.style.left = '210px';
        } else if (pathName.includes('/live-games')) {
            activeIndicator.style.left = '280px';
        } else if (pathName.includes('/game/lucky')) {
            activeIndicator.style.left = '350px';
        } else if (pathName.includes('/game/speed')) {
            activeIndicator.style.left = '420px';
        } else if (pathName.includes('/game/avaitor')) {
            activeIndicator.style.left = '490px';
        } else if (pathName.includes('/game/jetx')) {
            activeIndicator.style.left = '560px';
        }
    }, [pathName])

    // Returning JSX
    return (
        <nav data-sticked={isStickedToTop} className={'flex lg:flex-row flex-col-reverse justify-between gap-[10px] lg:items-center lg:bg-gradient-to-r bg-theme from-lightTheme to-theme lg:data-[sticked="true"]:rounded-b-[10px] transition-all duration-500 lg:data-[sticked="false"]:rounded-[10px] lg:p-[10px]'}>
            <div className={'flex items-center gap-[20px]'}>
                <div className={'lg:flex hidden items-center gap-[10px]'}>
                    <Link href="#"><Image className={'w-[70px] h-auto'} src={LogoTypoImage.src} alt={'Logo'} width={200} height={100} /></Link>
                    <img className={'w-[20px] h-[20px] aspect-square rounded-full'} src={EnImage.src} alt="Uk Flag" />
                </div>
                <div className={'flex w-full items-center gap-[20px]'}>
                    <div className={'lg:w-auto w-[90%] relative'}>
                        <div ref={activeIndicatorRef} style={{left: 0}} className={'w-[50px] transition-all duration-500 absolute lg:block hidden top-[125%] bg-blue shadow-blueNeon h-[3px] rounded-t-[50rem]'} />
                        <div className={'absolute lg:hidden block top-0 h-full left-0 w-[100px] pointer-events-none bg-gradient-to-l from-transparent to-theme'} />
                        <div className={'absolute lg:hidden block top-0 h-full right-0 w-[100px] pointer-events-none bg-gradient-to-r from-transparent to-theme'} />
                        <ul className={'flex items-center gap-[20px] lg:overflow-visible overflow-auto w-full no-scroll lg:px-0 px-[50px]'}>
                            <NavLinkComponent link={'/'} isActive={(pathName === '/')} name={'Home'} />
                            <NavLinkComponent link={'/live'} isActive={(pathName.includes('/live'))} name={'Live'} />
                            <NavLinkComponent link={'/sports'} isActive={(pathName.includes('/sports'))} name={'Sports'} />
                            <NavLinkComponent link={'/casino'} isActive={(pathName.includes('/casino'))} name={'Casino'} />
                            <NavLinkComponent link={'/live-games'} isActive={(pathName.includes('/live-games'))} name={'Live-games'} />
                            <NavLinkComponent link={'/game/lucky'} isActive={(pathName === '/game/lucky')} isImg name={"Lucky game"} imgSrc={LuckyGameImage.src} />
                            <NavLinkComponent link={'/game/speed'} isActive={(pathName === '/game/speed')} isImg name={"Speed game"} imgSrc={SpeedGameImage.src} />
                            <NavLinkComponent link={'/game/avaitor'} isActive={(pathName === '/game/avaitor')} isImg name={"Avaitor game"} imgSrc={AvaitorGameImage.src} />
                            <NavLinkComponent link={'/game/jetx'} isActive={(pathName === '/game/jetx')} isImg name={"JetX game"} imgSrc={JetXGameImage.src} />
                            <LinkDropdownComponent />
                            <li>
                                <ul className={'lg:hidden flex gap-[20px]'}>
                                    <NavLinkComponent link={'/game/cybersport'} isActive={false} name={'Cybersport'} />
                                    <NavLinkComponent link={'/game/fantasy-sport'} isActive={false} name={'Fantasy sport'} />
                                    <NavLinkComponent link={'/game/bat'} isActive={false} name={'Bat Games'} />
                                    <NavLinkComponent link={'/game/twain'} isActive={false} name={'Twain sport'} />
                                    <NavLinkComponent link={'/game/tvbet'} isActive={false} name={'TVBET'} />
                                    <NavLinkComponent link={'/game/1win'} isActive={false} name={'1win games'} />
                                    <NavLinkComponent link={'/statistics'} isActive={false} name={'Statistics'} />
                                    <NavLinkComponent link={'/results'} isActive={false} name={'Results'} />
                                    <NavLinkComponent link={'/cases'} isActive={false} name={'Cases'} />
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button className={'w-[10%] h-[50px] lg:hidden flex  justify-center items-center text-white'}>
                        <IconComponent name={'search'} size={10} />
                    </button>
                </div>
            </div>
            <div className={'flex lg:w-auto w-full items-center gap-[10px] shrink-0 '}>
                <Link className={'lg:bg-white/10 bg-blue lg:shadow-none shadow-blueNeon block lg:w-auto text-center w-[50%] hover:opacity-50 px-[15px] py-[5px] text-[12px] rounded-[5px] text-white transition-all duration-500'} href={'#'}>
                    Login
                </Link>
                <Link className={'lg:flex block items-center lg:shadow-none shadow-greenNeon text-center bg-gradient-to-r lg:w-auto w-[50%] from-green hover:opacity-50 to-darkerGreen px-[15px] py-[5px] rounded-[5px] transition-all duration-500 text-white text-[12px] gap-[10px]'} href={'#'}>
                    <span className={'bg-gradient-to-b lg:flex hidden justify-center items-center w-[20px] h-[20px] from-transparent to-white/50 rounded-full'}>
                        <IconComponent name={'plus'} size={10} />
                    </span>
                    Registration
                </Link>
            </div>
        </nav>
    );
}