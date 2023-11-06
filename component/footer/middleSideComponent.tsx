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
import LangDropdownComponent from "@/chunk/header/langDropdownComponent";

// Creating and exporting middle side of footer component as default
export default function MiddleSideComponent():ReactNode {
    // Returning JSX
    return (
        <>
            <div>
                <ul>
                    <li><a href="#"><IconComponent name={'telegram'} size={15} /></a></li>
                    <li><a href="#"><IconComponent name={'instagram'} size={15} /></a></li>
                    <li><a href="#"><IconComponent name={'facebook'} size={15} /></a></li>
                    <li><a href="#"><IconComponent name={'twitter-x'} size={15} /></a></li>
                </ul>
                <ul>
                    <li><img src={UefaImage.src} alt="Ueafa logo"/></li>
                    <li><img src={UfcImage.src} alt="Ufc logo"/></li>
                    <li><img src={WtaImage.src} alt="Wta logo"/></li>
                    <li><img src={FibaImage.src} alt="Fiba logo"/></li>
                    <li><img src={NhlImage.src} alt="Nhl logo"/></li>
                    <li><img src={AtpImage.src} alt="Atp logo"/></li>
                    <li><img src={ItfImage.src} alt="Itf logo"/></li>
                    <li><img src={FifaImage.src} alt="Fifa logo"/></li>
                </ul>
                <div>
                    <LangDropdownComponent position={'top'} />
                    <button><IconComponent name={'mobile'} size={20} /></button>
                    <button onClick={() => window.scrollTo(0,0)}><IconComponent name={'top'} size={20} /></button>
                </div>
            </div>
            <div className={'gradiant-divider'} />
            <div>

            </div>
        </>
    );
}