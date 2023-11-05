// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import LangDropdownItemComponent from "@/chunk/header/topside/langDropdownComponent/langDropdownItemComponent";
import EnImage from '@/public/img/header/flags/img-en.svg';
import AzImage from '@/public/img/header/flags/img-az.svg';
import BdImage from '@/public/img/header/flags/img-bd.svg';
import BrImage from '@/public/img/header/flags/img-br.svg';
import CnImage from '@/public/img/header/flags/img-cn.svg';
import DeImage from '@/public/img/header/flags/img-de.svg';
import EsImage from '@/public/img/header/flags/img-es.svg';
import FrImage from '@/public/img/header/flags/img-fr.svg';
import GrImage from '@/public/img/header/flags/img-gr.svg';
import IdImage from '@/public/img/header/flags/img-id.svg';
import InImage from '@/public/img/header/flags/img-in.svg';
import ItImage from '@/public/img/header/flags/img-it.svg';
import JpImage from '@/public/img/header/flags/img-jp.svg';
import KgImage from '@/public/img/header/flags/img-kg.svg';
import KoImage from '@/public/img/header/flags/img-ko.svg';
import KzImage from '@/public/img/header/flags/img-kz.svg';
import MdImage from '@/public/img/header/flags/img-md.svg';
import MxImage from '@/public/img/header/flags/img-mx.svg';
import PlImage from '@/public/img/header/flags/img-pl.svg';
import RuImage from '@/public/img/header/flags/img-ru.svg';
import TjImage from '@/public/img/header/flags/img-tj.svg';
import TrImage from '@/public/img/header/flags/img-tr.svg';
import UaImage from '@/public/img/header/flags/img-ua.svg';
import UzImage from '@/public/img/header/flags/img-uz.svg';
import ZaImage from '@/public/img/header/flags/img-za.svg';

// Creating and exporting language dropdown as default
export default function LangDropdownComponent():ReactNode {
    // Defining state of component
    const [isOpened, setOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div className={'relative'}>
            <button className={'h-[30px] px-[5px] bg-white/10 flex items-center rounded-[5px] gap-[10px]'}
                    onClick={() => {(isOpened) ? setOpened(false) : setOpened(true)}}
            >
                <span className={'block text-[10px] text-white'}>EN</span>
                <span className={'text-white rotate-180'}><IconComponent name={'chevron'} size={7} /></span>
                <img className={'aspect-square w-[20px]'} src={EnImage.src} alt="Flag of england"/>
            </button>
            <div data-opened={isOpened} className={'absolute top-[130%] right-0 bg-white/10 overflow-hidden rounded-[20px] w-[300px] h-[500px] p-[20px] transition-all duration-500 data-[opened="false"]:opacity-0 data-[opened="true"]:opacity-100 data-[opened="false"]:invisible data-[opened="true"]:visible'}>
                <div className={'overflow-auto w-full h-full pr-[10px] lang-dropdown'}>
                    <span className={'block truncate text-white text-[15px] font-bold mb-[15px]'}>Suggested languages</span>
                    <ul className={'rounded-[20px] overflow-hidden'}>
                        <LangDropdownItemComponent img={FrImage.src} name={'fr'} isSelected={false} />
                        <LangDropdownItemComponent img={EnImage.src} name={'en'} isSelected={true} />
                        <LangDropdownItemComponent img={RuImage.src} name={'ru'} isSelected={false} />
                    </ul>
                    <span className={'block truncate text-white text-[15px] font-bold my-[15px]'}>All languages</span>
                    <ul className={'rounded-[20px] overflow-hidden'}>
                        <LangDropdownItemComponent img={AzImage.src} name={'az'} isSelected={false} />
                        <LangDropdownItemComponent img={BdImage.src} name={'bd'} isSelected={false} />
                        <LangDropdownItemComponent img={BrImage.src} name={'br'} isSelected={false} />
                        <LangDropdownItemComponent img={CnImage.src} name={'cn'} isSelected={false} />
                        <LangDropdownItemComponent img={DeImage.src} name={'de'} isSelected={false} />
                        <LangDropdownItemComponent img={EsImage.src} name={'es'} isSelected={false} />
                        <LangDropdownItemComponent img={GrImage.src} name={'gr'} isSelected={false} />
                        <LangDropdownItemComponent img={IdImage.src} name={'id'} isSelected={false} />
                        <LangDropdownItemComponent img={InImage.src} name={'in'} isSelected={false} />
                        <LangDropdownItemComponent img={ItImage.src} name={'it'} isSelected={false} />
                        <LangDropdownItemComponent img={JpImage.src} name={'jp'} isSelected={false} />
                        <LangDropdownItemComponent img={KgImage.src} name={'kg'} isSelected={false} />
                        <LangDropdownItemComponent img={KoImage.src} name={'ko'} isSelected={false} />
                        <LangDropdownItemComponent img={KzImage.src} name={'kz'} isSelected={false} />
                        <LangDropdownItemComponent img={MdImage.src} name={'md'} isSelected={false} />
                        <LangDropdownItemComponent img={MxImage.src} name={'mx'} isSelected={false} />
                        <LangDropdownItemComponent img={PlImage.src} name={'pl'} isSelected={false} />
                        <LangDropdownItemComponent img={TjImage.src} name={'tj'} isSelected={false} />
                        <LangDropdownItemComponent img={TrImage.src} name={'tr'} isSelected={false} />
                        <LangDropdownItemComponent img={UaImage.src} name={'ua'} isSelected={false} />
                        <LangDropdownItemComponent img={UzImage.src} name={'uz'} isSelected={false} />
                        <LangDropdownItemComponent img={ZaImage.src} name={'za'} isSelected={false} />
                        <LangDropdownItemComponent img={InImage.src} name={'marathi'} isSelected={false} />
                    </ul>
                </div>
            </div>
        </div>
    );
}