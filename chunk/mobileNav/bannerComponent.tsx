// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    theme: 'blue' | 'pink';
    title: string;
    children: string;
    img: string;
}

// Creating and exporting banner component as default
export default function BannerComponent({theme, title ,children, img}:propsType):ReactNode {
    // Returning JDX
    return (
        <div data-theme={theme} className={'data-[theme="blue"]:from-blue h-[100px] data-[theme="pink"]:from-violet to-transparent bg-gradient-to-r rounded-[10px] flex items-center justify-between gap-[20px]'}>
            <div className={'flex'}>
                <div data-theme={theme} className={'w-[5px] h-[50px] from-white/60 to-transparent bg-gradient-to-t'} />
                <div className={'w-[50%] ml-[20px]'}>
                    <span className={'text-[12px] text-white block truncate mb-[5px]'}>{title}</span>
                    <p className={'text-[10px] text-white/50 leading-2'}>{children}</p>
                </div>
            </div>
            {
                (img === 'support')
                    ? <div className={'w-[10%] text-blue mr-[50px]'}><IconComponent name={'chat'} size={50} /></div>
                    : <img src={img} alt={title} className={'w-[30%] mr-[50px] -translate-y-5 block'} />
            }
        </div>
    );
}