// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import BestImage from '@/public/img/footer/bottom/img-best-bitcoin.png';
import BetrajaImage from '@/public/img/footer/bottom/img-betraja.png';
import BettingImage from '@/public/img/footer/bottom/img-betting-walli.png';
import CasinoImage from '@/public/img/footer/bottom/img-casino-analyzer.png';
import CasinoMentorImage from '@/public/img/footer/bottom/img-casino-mentor.png';
import CricketImage from '@/public/img/footer/bottom/img-cricket.png';
import RatingImage from '@/public/img/footer/bottom/img-rating.svg';
import LangDropdownComponent from "@/chunk/langDropdownComponent";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting bottom side of footer as default
export default function BottomSideComponent():ReactNode {
    // Returning JSX
    return (
        <div className={'flex lg:flex-row flex-col-reverse justify-between items-center gap-[20px] py-[20px]'}>
            <span className={'text-white/50 text-[12px]'}>© 2023 1WIN.</span>
            <div className={'lg:block flex justify-between items-center lg:w-auto w-full'}>
                <div className={'flex items-center gap-[20px] lg:flex-nowrap flex-wrap lg:w-auto w-[50%]'}>
                    <a href="#"><img className={'lg:w-[50px] w-[30px]'} src={BestImage.src} alt="Best Image"/></a>
                    <div className={'h-[20px] w-[1px] bg-white/10 lg:block hidden'} />
                    <a href="#"><img className={'lg:w-[50px] w-[30px]'} src={BetrajaImage.src} alt="Betraja Image"/></a>
                    <div className={'h-[20px] w-[1px] bg-white/10 lg:block hidden'} />
                    <a href="#"><img className={'lg:w-[50px] w-[30px]'} src={BettingImage.src} alt="Betting Image"/></a>
                    <div className={'h-[20px] w-[1px] bg-white/10 lg:block hidden'} />
                    <a href="#"><img className={'lg:w-[50px] w-[30px]'} src={CasinoImage.src} alt="Casino Image"/></a>
                    <div className={'h-[20px] w-[1px] bg-white/10 lg:block hidden'} />
                    <a href="#"><img className={'lg:w-[50px] w-[30px]'} src={CasinoMentorImage.src} alt="CasinoMentor Image"/></a>
                    <div className={'h-[20px] w-[1px] bg-white/10 lg:block hidden'} />
                    <a href="#"><img className={'lg:w-[50px] w-[30px]'} src={CricketImage.src} alt="Cricket Image"/></a>
                    <div className={'h-[20px] w-[1px] bg-white/10 lg:block hidden'} />
                    <a href="#"><img className={'lg:w-[50px] w-[30px]'} src={RatingImage.src} alt="Rating Image"/></a>
                    <div className={'h-[20px] w-[1px] bg-white/10 lg:block hidden'} />
                    <span className={'text-[25px] text-white/50 font-bold'}>18+</span>
                </div>
                <div className={'lg:hidden flex gap-[10px]'}>
                    <button className={'w-[30px] h-[30px] bg-white/10 flex justify-center items-center text-white rounded-[5px]'}>
                        <IconComponent name={'desktop'} size={15} />
                    </button>
                    <LangDropdownComponent position={'top'} />
                    <button className={'w-[30px] h-[30px] bg-white/10 flex justify-center items-center text-white rounded-[5px]'} onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>
                        <IconComponent name={'top'} size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
}