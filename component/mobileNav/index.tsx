// Importing part
import {EventHandler, ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import IconLinkItemComponent from "@/chunk/mobileNav/iconLinkItemComponent";
import BannerComponent from "@/chunk/mobileNav/bannerComponent";
import ApplicationBannerImage from '@/public/img/mobileNav/img-banner-mobile.png';
import LangDropdownComponent from "@/chunk/langDropdown";

// Defining type of props
interface propsType {
    closeFN: EventHandler<any>;
    isOpened: boolean;
}

// Creating and exporting mobile nav component as default
export default function MobileNavComponent({closeFN, isOpened}:propsType):ReactNode {
    // Returning JSX
    return (
        <nav className={'lg:hidden block z-[30] fixed top-0 left-0'}>
            <div data-opened={isOpened} className={'fixed w-full h-full top-0 left-0 bg-theme/80 z-[1] transition-all duration-500 data-[opened="true"]:opacity-100 data-[opened="true"]:visible data-[opened="false"]:opacity-0 data-[opened="false"]:invisible'} onClick={closeFN} />
            <nav data-opened={isOpened} className={'z-[2] fixed top-0 right-0 w-[75%] shadow-lg rounded-l-[30px] bg-lightTheme h-full overflow-auto transition-all duration-500 data-[opened="true"]:opacity-100 data-[opened="true"]:visible data-[opened="false"]:opacity-0 data-[opened="false"]:invisible'}>
                <div className={'sticky z-[30] top-0 left-0 w-full flex items-center justify-between bg-lightTheme flex-wrap p-[20px] gap-[10px]'}>
                    <div className={'flex items-center gap-[10px]'}>
                        <div className={'aspect-square w-[30px] rounded-[10px] flex justify-center items-center bg-white/10 text-white'}>
                            <IconComponent name={'person'} size={10} />
                        </div>
                        <Link className={'text-white rounded-[10px] text-[12px] bg-green px-[20px] truncate py-[5px]'} href={'/'}>Registration</Link>
                    </div>
                    <button onClick={closeFN} className={'text-white'}>
                        <IconComponent name={'x'} size={20} />
                    </button>
                </div>
                <div className={'p-[20px] flex flex-col gap-[20px]'}>
                    <ul className={'flex flex-col gap-[20px]'}>
                        <IconLinkItemComponent link={'/live'} icon={'live'} name={'Live'} />
                        <IconLinkItemComponent link={'/sports'} icon={'sports'} name={'Sports'} />
                        <IconLinkItemComponent link={'/casino'} icon={'casino'} name={'Casino'} />
                        <IconLinkItemComponent link={'/live-games'} icon={'live-games'} name={'Live-games'} />
                        <IconLinkItemComponent link={'/game/cybersport'} icon={'cyberspot'} name={'Cybersport'} />
                        <IconLinkItemComponent link={'/game/fantasy-sport'} icon={'fantasy-sport'} name={'Fantasy Sport'} />
                    </ul>
                    <div className={'gradiant-divider'} />
                    <ul className={'flex flex-col gap-[20px]'}>
                        <IconLinkItemComponent link={'/game/lucky'} icon={'jet-game'} />
                        <IconLinkItemComponent link={'/game/speed'} icon={'speed-game'} />
                        <IconLinkItemComponent link={'/game/avaitor'} icon={'avaitor-game'} name={'Avaitor'} />
                        <IconLinkItemComponent link={'/game/jetx'} icon={'jetx-game'} name={'JET X'} />
                    </ul>
                    <div className={'gradiant-divider'} />
                    <ul className={'flex flex-col gap-[20px]'}>
                        <IconLinkItemComponent link={'/quickgames'} icon={'quick-games'} name={'Quick games'} />
                        <IconLinkItemComponent link={'/bet'} icon={'bet'} name={'Betgames'} />
                        <IconLinkItemComponent link={'/game/tvbet'} icon={'tvbet'} name={'TVBET'} />
                        <IconLinkItemComponent link={'/game/1win'} icon={'1win'} name={'1win games'} />
                    </ul>
                    <ul className={'flex flex-col gap-[20px]'}>
                        <IconLinkItemComponent link={'/game/poker'} icon={'poker'} name={'Poker'} />
                        <IconLinkItemComponent link={'/game/vsport'} icon={'vsport'} name={'Vsport'} />
                        <IconLinkItemComponent link={'/bonuses'} icon={'bonuses'} name={'Bonosues'} />
                    </ul>
                    <div className={'flex gap-[20px] flex-col'}>
                        <BannerComponent theme={'pink'} title={'Application'} img={ApplicationBannerImage.src}>Install the app and get $100 bonuses</BannerComponent>
                        <BannerComponent theme={'blue'} title={'Support'} img={'support'}>24/7</BannerComponent>
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <Link className={'w-[30px] h-[30px] bg-white/10 text-white rounded-[5px] flex justify-center items-center'} href={'#'}><IconComponent name={'telegram'} size={15} /></Link>
                        <LangDropdownComponent />
                    </div>
                </div>
            </nav>
        </nav>
    );
}