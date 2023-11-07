// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import UefaImage from '@/public/img/footer/sponsers/img-uefa.svg';
import UfcImage from '@/public/img/footer/sponsers/img-ufc.svg';
import WtaImage from '@/public/img/footer/sponsers/img-wta.svg';
import FibaImage from '@/public/img/footer/sponsers/img-fiba.svg';
import NhlImage from '@/public/img/footer/sponsers/img-nhl.svg';
import AtpImage from '@/public/img/footer/sponsers/img-atp.svg';
import ItfImage from '@/public/img/footer/sponsers/img-itf.svg';
import FifaImage from '@/public/img/footer/sponsers/img-fifa.svg';
import LangDropdownComponent from "../../chunk/langDropdownComponent";

import ApplepayImage from '@/public/img/footer/companys/img-applepay.svg';
import AstropayImage from '@/public/img/footer/companys/img-astropay.svg';
import BitcoinImage from '@/public/img/footer/companys/img-bitcoin.svg';
import DiscoverImage from '@/public/img/footer/companys/img-discover.svg';
import EtherImage from '@/public/img/footer/companys/img-ether.svg';
import FkImage from '@/public/img/footer/companys/img-fk.svg';
import GpayImage from '@/public/img/footer/companys/img-gpay.svg';
import IntracImage from '@/public/img/footer/companys/img-intrac.svg';
import JbcImage from '@/public/img/footer/companys/img-jbc.svg';
import MuchbetterImage from '@/public/img/footer/companys/img-muchbetter.svg';
import PayeerImage from '@/public/img/footer/companys/img-payeer.svg';
import PaypalImage from '@/public/img/footer/companys/img-paypal.svg';
import PiastrixImage from '@/public/img/footer/companys/img-piastrix.svg';
import QiwiImage from '@/public/img/footer/companys/img-qiwi.svg';
import SkrillImage from '@/public/img/footer/companys/img-skrill.svg';
import TetherImage from '@/public/img/footer/companys/img-tether.svg';
import VisaImage from '@/public/img/footer/companys/img-visa.svg';
import WebmoneyImage from '@/public/img/footer/companys/img-webmoney.svg';

// Creating and exporting middle side of footer component as default
export default function MiddleSideComponent():ReactNode {
    // Returning JSX
    return (
        <>
            <div className={'flex lg:flex-row flex-col-reverse justify-between gap-[10px] flex-wrap lg:py-[20px]'}>
                <ul className={'lg:flex grid grid-cols-4 gap-[10px] lg:pb-0 lg:pt-0 pt-[15px] pb-[20px]'}>
                    <li>
                        <a className={'rounded-[10px] lg:shadow-none shadow-blueNeon text-white lg:w-[30px] gap-[10px] lg:h-[30px] flex lg:py-0 lg:px-0 py-[15px] px-[10px] justify-center items-center bg-gradient-to-r from-telegramLightBlue to-telegramBlue'} href="#">
                            <span className={'shrink-0'}><IconComponent name={'telegram'} size={15} /></span>
                            <span className={'text-[12px] truncate lg:hidden block'}>Telegram</span>
                        </a>
                    </li>
                    <li>
                        <a className={'rounded-[10px] lg:shadow-none shadow-galaxy text-white lg:w-[30px] gap-[10px] lg:h-[30px] flex lg:py-0 lg:px-0 py-[15px] px-[10px] justify-center items-center bg-gradient-to-tr from-instagramYellow via-instagramPink to-instagramPurple'} href="#">
                            <span className={'shrink-0'}><IconComponent name={'instagram'} size={15} /></span>
                            <span className={'text-[12px] truncate lg:hidden block'}>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a className={'rounded-[10px] lg:shadow-none shadow-blueNeon text-white lg:w-[30px] gap-[10px] lg:h-[30px] flex lg:py-0 lg:px-0 py-[15px] px-[10px] justify-center items-center bg-gradient-to-tr from-facebookLightBlue to-facebookBlue'} href="#">
                            <span className={'shrink-0'}><IconComponent name={'facebook'} size={15} /></span>
                            <span className={'text-[12px] truncate lg:hidden block'}>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a className={'rounded-[10px] lg:shadow-none shadow-[0_0_0] shadow-white text-black bg-white lg:w-[30px] gap-[10px] lg:h-[30px] lg:py-0 lg:px-0 py-[15px] px-[10px] flex justify-center items-center'} href="#">
                            <span className={'shrink-0'}><IconComponent name={'twitter-x'} size={15} /></span>
                            <span className={'text-[12px] truncate lg:hidden block'}>X (twitter)</span>
                        </a>
                    </li>
                </ul>
                <span className={'text-center text-white/60 text-[13px] lg:hidden block truncate'}>Social networks</span>
                <div className={'gradiant-divider lg:hidden block'} />
                <ul className={'flex lg:justify-start justify-between lg:overflow-hidden overflow-auto no-scroll gap-[20px]'}>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={UefaImage.src} alt="Ueafa logo"/></li>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={UfcImage.src} alt="Ufc logo"/></li>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={WtaImage.src} alt="Wta logo"/></li>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={FibaImage.src} alt="Fiba logo"/></li>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={NhlImage.src} alt="Nhl logo"/></li>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={AtpImage.src} alt="Atp logo"/></li>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={ItfImage.src} alt="Itf logo"/></li>
                    <li className={'lg:shrink shrink-0'}><img className={'lg:w-[50px] w-[70px] lg:h-[30px] h-[50px]'} src={FifaImage.src} alt="Fifa logo"/></li>
                </ul>
                <div className={'lg:flex hidden gap-[10px]'}>
                    <LangDropdownComponent position={'top'} />
                    <button className={'w-[30px] h-[30px] bg-white/10 flex justify-center items-center text-white rounded-[5px]'}><IconComponent name={'mobile'} size={15} /></button>
                    <button className={'w-[30px] h-[30px] bg-white/10 flex justify-center items-center text-white rounded-[5px]'} onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>
                        <IconComponent name={'top'} size={15} />
                    </button>
                </div>
            </div>
            <div className={'gradiant-divider'} />
            <ul className={'flex gap-[20px] justify-between items-center py-[20px] lg:flex-nowrap flex-wrap'}>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={ApplepayImage.src} alt="Applepay image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={AstropayImage.src} alt="Astropay image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={BitcoinImage.src} alt="Bitcoin image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={DiscoverImage.src} alt="Discover image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={EtherImage.src} alt="Ether image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={FkImage.src} alt="Fk image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={GpayImage.src} alt="Gpay image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={IntracImage.src} alt="Intrac image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={JbcImage.src} alt="Jbc image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={MuchbetterImage.src} alt="Muchbetter image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={PayeerImage.src} alt="Payeer image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={PaypalImage.src} alt="Paypal image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={PiastrixImage.src} alt="Piastrix image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={QiwiImage.src} alt="Qiwi image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={SkrillImage.src} alt="Skrill image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={TetherImage.src} alt="Tether image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={VisaImage.src} alt="Visa image"/></li>
                <li><img className={'w-full lg:h-[35px] h-[20px] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500'} src={WebmoneyImage.src} alt="Webmoney image"/></li>
            </ul>
        </>
    );
}