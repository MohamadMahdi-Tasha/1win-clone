// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import ColorfullIeconComponent from "@/chunk/colorfullIconComponent";
import JetGameIconImage from '@/public/img/mobileNav/img-jet-game-icon.png';
import SpeedGameIconImage from '@/public/img/mobileNav/img-speed-game-icon.png';
import JetGameImage from '@/public/img/header/bottomside/games/img-lucky.svg';
import SpeedGameImage from '@/public/img/header/bottomside/games/img-speed.svg';

// Defining type of props
interface propsType {
    icon: 'live'|'sports'|'casino'|'live-games'|'fantasy-sport'|'cyberspot'|'avaitor-game'|'jetx-game'|'quick-games'|'bet'|'tvbet'|'1win'|'poker'|'vsport'|'bonuses'|'jet-game'|'speed-game';
    link: string;
    name?: string;
}

// Creating and exporting icon link item component as default
export default function IconLinkItemComponent({icon, name, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link className={'flex items-center justify-start gap-[10px]'} href={link}>
                {
                    (icon === 'jet-game')
                        ? <img className={'w-[50px] shrink-0 h-[50px] object-cover'} src={JetGameIconImage.src} alt={'Lucky jet game icon'}/>
                        : (icon === 'speed-game')
                            ? <img className={'w-[50px] shrink-0 h-[50px] object-cover'} src={SpeedGameIconImage.src} alt={'Speed game icon'}/>
                            : <span className={'shrink-0'}><ColorfullIeconComponent name={icon} size={50} /></span>
                }
                {
                    (icon === 'jet-game')
                        ? <img className={'w-[20%]'} src={JetGameImage.src} alt="Jet Game"/>
                        : (icon === 'speed-game')
                            ? <img className={'w-[20%]'} src={SpeedGameImage.src} alt="Speed Game"/>
                            : <span className={'text-white text-[14px] font-bold truncate'}>{name}</span>
                }
            </Link>
        </li>
    );
}
