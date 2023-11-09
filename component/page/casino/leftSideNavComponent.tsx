// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import CategoryDetailsComponent from "@/chunk/page/casino/categoryDetailsComponent";
import CategoryGameComponent from "@/chunk/page/casino/categoryGameComponent";
import CategoryDropdownComponent from '@/chunk/page/casino/categoryDropdownComponent';

// Creating and exporting left side nav bar of casino page as default
export default function LeftSideNavComponent():ReactNode {
    // Returning JSX
    return (
        <nav className={'lg:h-screen lg:overflow-auto lg:bg-lightTheme lg:rounded-[20px] lg:custom-scroll lg:sticky left-0 top-[60px] w-full lg:mb-0 mb-[20px]'}>
            <header className={'lg:sticky top-0 left-0 lg:bg-lightTheme lg:px-[20px] lg:py-[15px]'}>
                <form action="#" className={'lg:flex relative lg:mb-0 mb-[10px]'}>
                    <label htmlFor="search-input" className={'text-lightBlue absolute top-[50%] left-[10px] -translate-y-[50%]'}>
                        <IconComponent name={'search'} size={15} />
                    </label>
                    <input type="text" placeholder={'Search'} required id={'search-input'} name={'search-input'} className={'py-[7px] placeholder:text-white/10 text-lightBlue outline-0 pl-[40px] block w-full text-[15px] rounded-[10px] pr-[10px] bg-white/10'} />
                </form>
                <div className={'lg:hidden relative flex gap-[10px]'}>
                    <CategoryDropdownComponent title={'Provider'}>
                        <CategoryGameComponent icon={'square'} title={'1win games'} count={13} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'new'} count={69} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Quick games'} count={196} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Jackpots'} count={440} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Slots'} count={6914} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Only on 1win'} count={16} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Top Games'} count={191} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Grand Holiday 500$'} count={333} link={'#'} />
                    </CategoryDropdownComponent>
                    <CategoryDropdownComponent title={'Category'}>
                        <CategoryGameComponent icon={'square'} title={'1win games'} count={13} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'new'} count={69} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Quick games'} count={196} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Jackpots'} count={440} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Slots'} count={6914} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Only on 1win'} count={16} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Top Games'} count={191} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Grand Holiday 500$'} count={333} link={'#'} />
                    </CategoryDropdownComponent>
                </div>
            </header>
            <main className={'lg:flex hidden gap-[20px] flex-col lg:pb-[20px]'}>
                <div>
                    <div className={'p-[20px]'}>
                        <span className={'text-[10px] text-white/50 block truncate mb-[10px]'}>CATEGORIES</span>
                        <div className={'flex gap-[10px]'}>
                            <CategoryDetailsComponent name={'heated'} icon={'flame'} theme={'pink'} count={14} link={'#'} />
                            <CategoryDetailsComponent name={'popular'} icon={'happy-face'} theme={'green'} count={14} link={'#'} />
                        </div>
                    </div>
                    <ul className={'[&>li:not(:first-of-type)>a]:border-y [&>li:first-of-type>a]:border-b [&>li>a]:border-white/5'}>
                        <CategoryGameComponent icon={'square'} title={'1win games'} count={13} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'new'} count={69} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Quick games'} count={196} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Jackpots'} count={440} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Slots'} count={6914} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Only on 1win'} count={16} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Top Games'} count={191} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Grand Holiday 500$'} count={333} link={'#'} />
                    </ul>
                </div>
                <div>
                    <div className={'p-[20px]'}>
                        <span className={'text-[10px] text-white/50 block truncate'}>PROVIDERS</span>
                    </div>
                    <ul className={'[&>li:not(:first-of-type)>a]:border-y [&>li:first-of-type>a]:border-b [&>li>a]:border-white/5'}>
                        <CategoryGameComponent icon={'square'} title={'1win games'} count={13} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'new'} count={69} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Quick games'} count={196} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Jackpots'} count={440} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Slots'} count={6914} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Only on 1win'} count={16} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Top Games'} count={191} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Grand Holiday 500$'} count={333} link={'#'} />
                    </ul>
                </div>
                <div>
                    <div className={'p-[20px]'}>
                        <span className={'text-[10px] text-white/50 block truncate'}>A</span>
                    </div>
                    <ul className={'[&>li:not(:first-of-type)>a]:border-y [&>li:first-of-type>a]:border-b [&>li>a]:border-white/5'}>
                        <CategoryGameComponent icon={'square'} title={'1win games'} count={13} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'new'} count={69} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Quick games'} count={196} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Jackpots'} count={440} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Slots'} count={6914} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Only on 1win'} count={16} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Top Games'} count={191} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Grand Holiday 500$'} count={333} link={'#'} />
                    </ul>
                </div>
                <div>
                    <div className={'p-[20px]'}>
                        <span className={'text-[10px] text-white/50 block truncate'}>B</span>
                    </div>
                    <ul className={'[&>li:not(:first-of-type)>a]:border-y [&>li:first-of-type>a]:border-b [&>li>a]:border-white/5'}>
                        <CategoryGameComponent icon={'square'} title={'1win games'} count={13} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'new'} count={69} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Quick games'} count={196} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Jackpots'} count={440} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Slots'} count={6914} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Only on 1win'} count={16} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Top Games'} count={191} link={'#'} />
                        <CategoryGameComponent icon={'square'} title={'Grand Holiday 500$'} count={333} link={'#'} />
                    </ul>
                </div>
            </main>
        </nav>
    );
}