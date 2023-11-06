// Importing part
import {ReactNode} from "react";
import LogoImage from '@/public/img/img-logo-typo.svg';
import Image from 'next/image';
import DownloadComponent from "@/chunk/footer/topSide/downloadComponent";

// Creating and exporting top side of footer component as default
export default function TopSideComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <div className={'flex gap-[10px] items-center'}>
                <Image className={'w-[50px]'} width={200} height={100} src={LogoImage.src} alt={'1Win Logo'} />
                <div className={'gradiant-divider'} />
            </div>
            <div className={'grid grid-cols-7 gap-[20px] py-[20px]'}>
                <div>
                    <h5 className={'footer-title mb-[5px]'}>24/7 support</h5>
                    <p className={'footer-paragraph'}>Contact us if you still have any questions</p>
                </div>
                <div className={'col-span-2'}>
                    <h6 className={'footer-subtitle mb-[40px]'}>SUPPORT CONTACTS</h6>
                    <ul className={'flex flex-col gap-[8px]'}>
                        <li className={'flex gap-[10px] justify-between items-center flex-wrap'}>
                            <h6 className={'footer-subtitle'}>Technical support</h6>
                            <a className={'footer-subtitle-white'} href="mailto:support@1win.xyz">support@1win.xyz</a>
                        </li>
                        <li className={'flex gap-[10px] justify-between items-center flex-wrap'}>
                            <h6 className={'footer-subtitle'}>Security service</h6>
                            <a className={'footer-subtitle-white'} href="mailto:security@1win.xyz">security@1win.xyz</a>
                        </li>
                        <li className={'flex gap-[10px] justify-between items-center flex-wrap'}>
                            <h6 className={'footer-subtitle'}>Commercial offers</h6>
                            <a className={'footer-subtitle-white'} href="mailto:business@1win.xyz">business@1win.xyz</a>
                        </li>
                        <li className={'flex gap-[10px] justify-between items-center flex-wrap'}>
                            <h6 className={'footer-subtitle'}>Affiliate program</h6>
                            <a className={'footer-subtitle-white'} href="mailto:partner@1win.xyz">partner@1win.xyz</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className={'footer-subtitle mb-[40px]'}>INFORMATION</h6>
                    <ul className={'flex flex-col gap-[8px]'}>
                        <li><a className={'footer-subtitle-white block'} href="#">Rules</a></li>
                        <li><a className={'footer-subtitle-white block'} href="#">Promotions and bonuses</a></li>
                        <li><a className={'footer-subtitle-white block'} href="#">Mobile version</a></li>
                        <li><a className={'footer-subtitle-white block'} href="#">Affiliate program</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className={'footer-subtitle mb-[40px]'}>CATEGORIES</h6>
                    <div className={'flex gap-[8px]'}>
                        <ul className={'flex gap-[8px] flex-col'}>
                            <li className={'block'}><a className={'footer-subtitle-white block truncate'} href="#">Live</a></li>
                            <li className={'block'}><a className={'footer-subtitle-white block truncate'} href="#">Sports</a></li>
                            <li className={'block'}><a className={'footer-subtitle-white block truncate'} href="#">Promotions</a></li>
                            <li className={'block'}><a className={'footer-subtitle-white block truncate'} href="#">Live-games</a></li>
                        </ul>
                        <ul className={'flex gap-[8px] flex-col'}>
                            <li className={'block'}><a className={'footer-subtitle-white block truncate'} href="#">Poker</a></li>
                            <li className={'block'}><a className={'footer-subtitle-white block truncate'} href="#">Casino</a></li>
                        </ul>
                    </div>
                </div>
                <div className={'col-span-2 h-[96px] flex gap-[10px]'}>
                    <div className={'w-[50%] relative'}>
                        <div className={'flex gap-[5px] flex-col group'}>
                            <DownloadComponent name={'ios'} isLarge={false} />
                            <DownloadComponent name={'android'} isLarge={false} />
                        </div>
                    </div>
                    <DownloadComponent name={'windows'} isLarge />
                </div>
            </div>
        </div>
    );
}