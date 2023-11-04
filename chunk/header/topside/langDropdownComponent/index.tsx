// Importing part
import {ReactNode} from "react";
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
    // Returning JSX
    return (
        <div>
            <button>
                <span>EN</span>
                <IconComponent name={'chevron-down'} size={5} />
                <img src={EnImage.src} alt="Flag of england"/>
            </button>
            <div>
                <span>Suggested languages</span>
                <ul>
                    <LangDropdownItemComponent img={FrImage.src} name={'fr'} isSelected={false} />
                    <LangDropdownItemComponent img={EnImage.src} name={'en'} isSelected={true} />
                    <LangDropdownItemComponent img={RuImage.src} name={'ru'} isSelected={false} />
                </ul>
                <span>All languages</span>
                <ul>
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
    );
}