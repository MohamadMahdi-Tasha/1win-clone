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
            <div className={'flex justify-between gap-[10px] flex-wrap py-[20px]'}>
                <ul className={'flex gap-[10px]'}>
                    <li><a className={'rounded-[10px] text-white bg-red-600 w-[30px] h-[30px] flex justify-center items-center'} href="#"><IconComponent name={'telegram'} size={15} /></a></li>
                    <li><a className={'rounded-[10px] text-white bg-red-600 w-[30px] h-[30px] flex justify-center items-center'} href="#"><IconComponent name={'instagram'} size={15} /></a></li>
                    <li><a className={'rounded-[10px] text-white bg-red-600 w-[30px] h-[30px] flex justify-center items-center'} href="#"><IconComponent name={'facebook'} size={15} /></a></li>
                    <li><a className={'rounded-[10px] text-white bg-red-600 w-[30px] h-[30px] flex justify-center items-center'} href="#"><IconComponent name={'twitter-x'} size={15} /></a></li>
                </ul>
                <ul className={'flex gap-[20px]'}>
                    <li><img className={'w-[50px] h-[30px]'} src={UefaImage.src} alt="Ueafa logo"/></li>
                    <li><img className={'w-[50px] h-[30px]'} src={UfcImage.src} alt="Ufc logo"/></li>
                    <li><img className={'w-[50px] h-[30px]'} src={WtaImage.src} alt="Wta logo"/></li>
                    <li><img className={'w-[50px] h-[30px]'} src={FibaImage.src} alt="Fiba logo"/></li>
                    <li><img className={'w-[50px] h-[30px]'} src={NhlImage.src} alt="Nhl logo"/></li>
                    <li><img className={'w-[50px] h-[30px]'} src={AtpImage.src} alt="Atp logo"/></li>
                    <li><img className={'w-[50px] h-[30px]'} src={ItfImage.src} alt="Itf logo"/></li>
                    <li><img className={'w-[50px] h-[30px]'} src={FifaImage.src} alt="Fifa logo"/></li>
                </ul>
                <div className={'flex gap-[10px]'}>
                    <LangDropdownComponent position={'top'} />
                    <button className={'w-[30px] h-[30px] bg-white/10 flex justify-center items-center text-white rounded-[5px]'}><IconComponent name={'mobile'} size={15} /></button>
                    <button className={'w-[30px] h-[30px] bg-white/10 flex justify-center items-center text-white rounded-[5px]'} onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>
                        <IconComponent name={'top'} size={15} />
                    </button>
                </div>
            </div>
            <div className={'gradiant-divider'} />
            <div className={'flex gap-[20px] justify-between items-center py-[20px]'}>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={ApplepayImage.src} alt="Applepay image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={AstropayImage.src} alt="Astropay image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={BitcoinImage.src} alt="Bitcoin image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={DiscoverImage.src} alt="Discover image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={EtherImage.src} alt="Ether image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={FkImage.src} alt="Fk image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={GpayImage.src} alt="Gpay image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={IntracImage.src} alt="Intrac image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={JbcImage.src} alt="Jbc image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={MuchbetterImage.src} alt="Muchbetter image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={PayeerImage.src} alt="Payeer image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={PaypalImage.src} alt="Paypal image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={PiastrixImage.src} alt="Piastrix image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={QiwiImage.src} alt="Qiwi image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={SkrillImage.src} alt="Skrill image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={TetherImage.src} alt="Tether image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={VisaImage.src} alt="Visa image"/></div>
                <div><img className={'w-full h-[35px] grayscale hover:grayscale-0 transition-all duration-500'} src={WebmoneyImage.src} alt="Webmoney image"/></div>
            </div>
        </>
    );
}