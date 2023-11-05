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
    name?: string;
}

// Creating and exporting icon link item component as default
export default function IconLinkItemComponent({icon, name}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={'#'}>
                {
                    (icon === 'jet-game')
                        ? <img src={JetGameIconImage.src} alt={'Lucky jet game icon'}/>
                        : (icon === 'speed-game')
                            ? <img src={SpeedGameIconImage.src} alt={'Speed game icon'}/>
                            : <ColorfullIeconComponent name={icon} size={20} />
                }
                {
                    (icon === 'jet-game')
                        ? <img src={JetGameImage.src} alt="Jet Game"/>
                        : (icon === 'speed-game')
                            ? <img src={SpeedGameImage.src} alt="Speed Game"/>
                            : <span>{name}</span>
                }
            </Link>
        </li>
    );
}
