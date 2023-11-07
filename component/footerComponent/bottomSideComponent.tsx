// Importing part
import {ReactNode} from "react";
import BestImage from '@/public/img/footer/bottom/img-best-bitcoin.png';
import BetrajaImage from '@/public/img/footer/bottom/img-betraja.png';
import BettingImage from '@/public/img/footer/bottom/img-betting-walli.png';
import CasinoImage from '@/public/img/footer/bottom/img-casino-analyzer.png';
import CasinoMentorImage from '@/public/img/footer/bottom/img-casino-mentor.png';
import CricketImage from '@/public/img/footer/bottom/img-cricket.png';
import RatingImage from '@/public/img/footer/bottom/img-rating.svg';

// Creating and exporting bottom side of footer as default
export default function BottomSideComponent():ReactNode {
    // Returning JSX
    return (
        <div className={'flex justify-between items-center py-[20px]'}>
            <span className={'text-white/50 text-[12px]'}>© 2023 1WIN.</span>
            <div className={'flex items-center gap-[20px]'}>
                <a href="#"><img className={'w-[50px]'} src={BestImage.src} alt="Best Image"/></a>
                <div className={'h-[20px] w-[1px] bg-white/10'} />
                <a href="#"><img className={'w-[50px]'} src={BetrajaImage.src} alt="Betraja Image"/></a>
                <div className={'h-[20px] w-[1px] bg-white/10'} />
                <a href="#"><img className={'w-[50px]'} src={BettingImage.src} alt="Betting Image"/></a>
                <div className={'h-[20px] w-[1px] bg-white/10'} />
                <a href="#"><img className={'w-[50px]'} src={CasinoImage.src} alt="Casino Image"/></a>
                <div className={'h-[20px] w-[1px] bg-white/10'} />
                <a href="#"><img className={'w-[50px]'} src={CasinoMentorImage.src} alt="CasinoMentor Image"/></a>
                <div className={'h-[20px] w-[1px] bg-white/10'} />
                <a href="#"><img className={'w-[50px]'} src={CricketImage.src} alt="Cricket Image"/></a>
                <div className={'h-[20px] w-[1px] bg-white/10'} />
                <a href="#"><img className={'w-[50px]'} src={RatingImage.src} alt="Rating Image"/></a>
                <div className={'h-[20px] w-[1px] bg-white/10'} />
                <span className={'text-[25px] text-white/50 font-bold'}>18+</span>
            </div>
        </div>
    );
}