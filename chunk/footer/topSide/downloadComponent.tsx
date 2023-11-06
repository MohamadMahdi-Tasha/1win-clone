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
            <a href={'#'}>
                <ColorfullIconComponent name={(name === 'ios') ? 'ios' : (name === 'windows') ? "windows" : "android-typo"} size={20} />
                <div>
                    <span>Application</span>
                    <span>For {name.charAt(0).toUpperCase() + name.slice(1)}</span>
                </div>
                <IconComponent name={'info'} size={10} />
            </a>
        );
    } else {
        return (
            <a href={'#'}>
                <div>
                    <ColorfullIconComponent name={(name === 'ios') ? 'ios' : (name === 'windows') ? "windows" : "android-typo"} size={20} />
                    <span><IconComponent name={'chevron'} size={10} /></span>
                    <div>
                        <span>Application</span>
                        <span>For {name.charAt(0).toUpperCase() + name.slice(1)}</span>
                    </div>
                </div>
            </a>
        );
    }
}
