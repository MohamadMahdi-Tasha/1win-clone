// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import ColorfullIconComponent from "@/chunk/colorfullIconComponent";

// Defining type of props
interface propsType {
    name: 'ios' | 'android' | 'windows';
    isLarge: boolean;
}

// Creating and exporting download component as defualt
export default function DownloadComponent({name, isLarge}:propsType):ReactNode {
    // Conditional rendering
    if (!isLarge) {
        return (
            <a href={'#'} className={'px-[10px] py-[5px] flex items-center justify-between gap-[5px] border rounded-[10px] border-white/20 w-full'}>
                <div className={'flex gap-[10px] items-center'}>
                    <ColorfullIconComponent name={(name === 'ios') ? 'ios' : (name === 'windows') ? "windows" : "android-typo"} size={20} />
                    <div>
                        <span className={'block truncate text-[10px] text-white/60'}>Application</span>
                        <span className={'block truncate text-[12px] text-white'}>For {name.charAt(0).toUpperCase() + name.slice(1)}</span>
                    </div>
                </div>
                <span className={'text-white/60'}><IconComponent name={'info'} size={10} /></span>
            </a>
        );
    } else {
        return (
            <a className={'p-[10px] border rounded-[10px] border-white/20 lg:block hidden w-[50%]'} href={'#'}>
                <div className={'flex justify-between gap-[10px] mb-[10px]'}>
                    <ColorfullIconComponent name={(name === 'ios') ? 'ios' : (name === 'windows') ? "windows" : "android-typo"} size={20} />
                    <span className={'rotate-90 text-white/60'}><IconComponent name={'chevron'} size={10} /></span>
                </div>
                <div>
                    <span className={'block truncate text-[10px] text-white/60'}>Application</span>
                    <span className={'block truncate text-[12px] text-white'}>For {name.charAt(0).toUpperCase() + name.slice(1)}</span>
                </div>
            </a>
        );
    }
}
