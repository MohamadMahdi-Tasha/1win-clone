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
        <div>
            <span>© 2023 1WIN.</span>
            <div>
                <img src={BestImage.src} alt="Best Image"/>
                <img src={BetrajaImage.src} alt="Betraja Image"/>
                <img src={BettingImage.src} alt="Betting Image"/>
                <img src={CasinoImage.src} alt="Casino Image"/>
                <img src={CasinoMentorImage.src} alt="CasinoMentor Image"/>
                <img src={CricketImage.src} alt="Cricket Image"/>
                <img src={RatingImage.src} alt="Rating Image"/>
                <span>18+</span>
            </div>
        </div>
    );
}