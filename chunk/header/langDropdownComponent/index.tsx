// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import LangDropdownItemComponent from "@/chunk/header/langDropdownComponent/langDropdownItemComponent";
import EnImage from '@/public/img/flags/img-en.svg';
import AzImage from '@/public/img/flags/img-az.svg';
import BdImage from '@/public/img/flags/img-bd.svg';
import BrImage from '@/public/img/flags/img-br.svg';
import CnImage from '@/public/img/flags/img-cn.svg';
import DeImage from '@/public/img/flags/img-de.svg';
import EsImage from '@/public/img/flags/img-es.svg';
import FrImage from '@/public/img/flags/img-fr.svg';
import GrImage from '@/public/img/flags/img-gr.svg';
import IdImage from '@/public/img/flags/img-id.svg';
import InImage from '@/public/img/flags/img-in.svg';
import ItImage from '@/public/img/flags/img-it.svg';
import JpImage from '@/public/img/flags/img-jp.svg';
import KgImage from '@/public/img/flags/img-kg.svg';
import KoImage from '@/public/img/flags/img-ko.svg';
import KzImage from '@/public/img/flags/img-kz.svg';
import MdImage from '@/public/img/flags/img-md.svg';
import MxImage from '@/public/img/flags/img-mx.svg';
import PlImage from '@/public/img/flags/img-pl.svg';
import RuImage from '@/public/img/flags/img-ru.svg';
import TjImage from '@/public/img/flags/img-tj.svg';
import TrImage from '@/public/img/flags/img-tr.svg';
import UaImage from '@/public/img/flags/img-ua.svg';
import UzImage from '@/public/img/flags/img-uz.svg';
import ZaImage from '@/public/img/flags/img-za.svg';

// Defining type of props
interface propsType {
    position?: 'bottom' | 'top';
}

// Creating and exporting language dropdown as default
export default function LangDropdownComponent({position = 'top'}:propsType):ReactNode {
    // Defining state of component
    const [isOpened, setOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div className={'relative'}>
            <button data-opened={isOpened} className={'h-[30px] px-[5px] bg-lightTheme data-[opened="true"]:opacity-50 transition-all duration-500 hover:opacity-50 flex items-center rounded-[5px] gap-[10px]'}
                    onClick={() => {(isOpened) ? setOpened(false) : setOpened(true)}}
            >
                <span className={'block text-[10px] text-white'}>EN</span>
                <span className={'text-white rotate-180'}><IconComponent name={'chevron'} size={7} /></span>
                <img className={'aspect-square w-[20px]'} src={EnImage.src} alt="Flag of england"/>
            </button>
            <div data-position={position} data-opened={isOpened} className={'lg:absolute fixed lg:data-[position="top"]:bottom-[130%] lg:data-[position="bottom"]:top-[130%] data-[position="top"]:top-0 data-[position="bottom"]:top-0 shadow-lg right-0 bg-lightTheme z-[20] overflow-hidden lg:rounded-[20px] lg:w-[300px] w-full lg:h-[500px] h-full p-[20px] transition-all duration-500 data-[opened="false"]:opacity-0 data-[opened="true"]:opacity-100 data-[opened="false"]:invisible data-[opened="true"]:visible'}>
                <div className={'overflow-auto w-full h-full pr-[10px] lang-dropdown'}>
                    <div className={'mb-[20px] lg:hidden flex justify-end items-center '}>
                        <button onClick={() => setOpened(false)} className={'text-white'}>
                            <IconComponent name={'x'} size={20} />
                        </button>
                    </div>
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