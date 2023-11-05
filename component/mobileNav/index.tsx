// Importing part
import {EventHandler, ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import IconLinkItemComponent from "@/chunk/mobileNav/iconLinkItemComponent";
import BannerComponent from "@/chunk/mobileNav/bannerComponent";
import ApplicationBannerImage from '@/public/img/mobileNav/img-banner-mobile.png';
import EnImage from "@/public/img/flags/img-en.svg";

// Defining type of props
interface propsType {
    closeFN: EventHandler<any>;
}

// Creating and exporting mobile nav component as default
export default function MobileNavComponent({closeFN}:propsType):ReactNode {
    // Returning JSX
    return (
        <>
            <div onClick={closeFN} />
            <nav>
                <div>
                    <div>
                        <div><IconComponent name={'person'} size={10} /></div>
                        <Link href={'/'}>Registration</Link>
                    </div>
                    <button onClick={closeFN}>
                        <IconComponent name={'x'} size={20} />
                    </button>
                </div>
                <ul>
                    <IconLinkItemComponent icon={'live'} name={'Live'} />
                    <IconLinkItemComponent icon={'sports'} name={'Sports'} />
                    <IconLinkItemComponent icon={'casino'} name={'Casino'} />
                    <IconLinkItemComponent icon={'live-games'} name={'Live-games'} />
                    <IconLinkItemComponent icon={'fantasy-sport'} name={'Fantasy Sport'} />
                    <IconLinkItemComponent icon={'cyberspot'} name={'Cybersport'} />
                </ul>
                <div className={'gradiant-divider'} />
                <ul>
                    <IconLinkItemComponent icon={'jet-game'} />
                    <IconLinkItemComponent icon={'speed-game'} />
                    <IconLinkItemComponent icon={'avaitor-game'} name={'Avaitor'} />
                    <IconLinkItemComponent icon={'jetx-game'} name={'JET X'} />
                </ul>
                <div className={'gradiant-divider'} />
                <ul>
                    <IconLinkItemComponent icon={'quick-games'} name={'Quick games'} />
                    <IconLinkItemComponent icon={'bet'} name={'Betgames'} />
                    <IconLinkItemComponent icon={'tvbet'} name={'TVBET'} />
                    <IconLinkItemComponent icon={'1win'} name={'1win games'} />
                </ul>
                <ul>
                    <IconLinkItemComponent icon={'poker'} name={'Poker'} />
                    <IconLinkItemComponent icon={'vsport'} name={'Vsport'} />
                    <IconLinkItemComponent icon={'bonuses'} name={'Bonosues'} />
                </ul>
                <div>
                    <BannerComponent theme={'pink'} title={'Application'} img={ApplicationBannerImage.src}>Install the app and get $100 bonuses</BannerComponent>
                    <BannerComponent theme={'blue'} title={'Support'} img={'support'}>24/7</BannerComponent>
                </div>
                <div>
                    <Link href={'#'}><IconComponent name={'telegram'} size={20} /></Link>
                    <button className={'h-[30px] px-[5px] bg-lightTheme transition-all duration-500 hover:opacity-50 flex items-center rounded-[5px] gap-[10px]'}>
                        <span className={'block text-[10px] text-white'}>EN</span>
                        <span className={'text-white rotate-180'}><IconComponent name={'chevron'} size={7} /></span>
                        <img className={'aspect-square w-[20px]'} src={EnImage.src} alt="Flag of england"/>
                    </button>
                </div>
            </nav>
        </>
    );
}