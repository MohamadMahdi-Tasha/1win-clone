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
            <div>

            </div>
        </>
    );
}