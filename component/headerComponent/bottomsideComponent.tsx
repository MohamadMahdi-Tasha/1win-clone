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

// Creating and exporting bottom side od header component as default
export default function BottomsideComponent():ReactNode {
    // Returning JSX
    return (
        <nav>
            <div>
                <Link href="#"><Image src={LogoTypoImage.src} alt={'Logo'} width={200} height={100} /></Link>
                <ul>
                    <NavLinkComponent name={'Home'} />
                    <NavLinkComponent name={'Live'} />
                    <NavLinkComponent name={'Sports'} />
                    <NavLinkComponent name={'Casino'} />
                    <NavLinkComponent name={'Live-games'} />
                    <NavLinkComponent isImg name={"Lucky game"} imgSrc={LuckyGameImage.src} />
                    <NavLinkComponent isImg name={"Speed game"} imgSrc={SpeedGameImage.src} />
                    <NavLinkComponent isImg name={"Avaitor game"} imgSrc={AvaitorGameImage.src} />
                    <NavLinkComponent isImg name={"JetX game"} imgSrc={JetXGameImage.src} />
                    <NavLinkComponent name={'Quick games'} />
                    <NavLinkComponent name={'Poker'} />
                    <NavLinkComponent name={'Vsport'} />
                    <LinkDropdownComponent />
                </ul>
            </div>
            <div>
                <Link href={'#'}>
                    Login
                </Link>
                <Link href={'#'}>
                    <span><IconComponent name={'plus'} size={10} /></span>
                    Registration
                </Link>
            </div>
        </nav>
    );
}