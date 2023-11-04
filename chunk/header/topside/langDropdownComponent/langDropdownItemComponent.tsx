// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, useEffect, Dispatch} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    name: 'az'|'bd'|'br'|'cn'|'de'|'en'|'es'|'fr'|'gr'|'id'|'in'|'it'|'jp'|'kg'|'ko'|'kz'|'md'|'mx'|'pl'|'ru'|'tj'|'tr'|'ua'|'uz'|'za'|'marathi';
    img: string;
    isSelected: boolean;
}

// Creating lang dropdown component as default
export default function LangDropdownItemComponent({name,img,isSelected}:propsType):ReactNode {
    // Defining states of component
    const [enName, setEnName]:[string, Dispatch<string>] = useState('');
    const [nameState, setNameState]:[string, Dispatch<string>] = useState('');

    // Using useEffect hook to set names of component
    useEffect(() => {
        switch (name) {
            case "fr": {
                setNameState('Le français');
                setEnName('French');
                break;
            } case "en": {
                setNameState('English');
                setEnName('English');
                break;
            } case "ru": {
                setNameState('Русский');
                setEnName('Russian');
                break;
            } case "az": {
                setNameState('Azərbaycan dili');
                setEnName('Azeri');
                break;
            } case "bd": {
                setNameState('বাংলা');
                setEnName('Bengali');
                break;
            } case "cn": {
                setNameState('中文');
                setEnName('Chinese');
                break;
            } case "de": {
                setNameState('Deutsch');
                setEnName('German');
                break;
            } case "gr": {
                setNameState('Ελληνικά');
                setEnName('German');
                break;
            } case "in": {
                setNameState('हिन्दी');
                setEnName('Hindi');
                break;
            } case "id": {
                setNameState('Indonesian');
                setEnName('Indonesian');
                break;
            } case "it": {
                setNameState('Italiano');
                setEnName('Italian');
                break;
            } case "jp": {
                setNameState('日本');
                setEnName('Japanese');
                break;
            } case "kz": {
                setNameState('Қазақ');
                setEnName('Kazakh');
                break;
            } case "kg": {
                setNameState('Кыргызча');
                setEnName('Kirghiz');
                break;
            } case "ko": {
                setNameState('한국인');
                setEnName('Korean');
                break;
            } case "marathi": {
                setNameState('मराठी');
                setEnName('Marathi');
                break;
            } case "md": {
                setNameState('Moldovan');
                setEnName('Moldavian');
                break;
            } case "pl": {
                setNameState('Polski');
                setEnName('Polish');
                break;
            } case "br": {
                setNameState('Português');
                setEnName('Portuguese');
                break;
            } case "es": {
                setNameState('Espanol');
                setEnName('Spanish');
                break;
            } case "mx": {
                setNameState('Español (México)');
                setEnName('Spanish');
                break;
            } case "za": {
                setNameState('Kiswahili');
                setEnName('Swahili');
                break;
            } case "tj": {
                setNameState('Tоҷикӣ');
                setEnName('Tajik');
                break;
            } case "tr": {
                setNameState('Türk');
                setEnName('Turkish');
                break;
            } case "ua": {
                setNameState('Українська');
                setEnName('Ukrainian');
                break;
            } case "uz": {
                setNameState('Ozbek');
                setEnName('Uzbek');
                break;
            }
        }
    }, [])

    // Returning JSX
    return (
        <li>
            <button>
                <img src={img} alt={`Flag of ${enName}`} />
                <div>
                    <span>{nameState}</span>
                    <span>{enName}</span>
                </div>
                {
                    (isSelected)
                        ? <IconComponent name={'tick'} size={20} />
                        : false
                }
            </button>
        </li>
    );
}