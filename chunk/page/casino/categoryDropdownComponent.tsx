// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    children: ReactNode;
    title: string;
}

// Creating and exporting category dropdown component as default
export default function CategoryDropdownComponent({children, title}:propsType):ReactNode {
    // Defining state of component
    const [isOpened, setOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div className={'w-[50%]'}>
            <button onClick={() => (isOpened) ? setOpened(false) : setOpened(true)} className={'flex items-center justify-between gap-[10px] p-[10px] rounded-[10px] bg-white/10 w-full'}>
                <span className={'shrink-0 text-white/50 text-[12px] truncate'}>{title}</span>
                <span className={'text-white/50 rotate-180'}>
                    <IconComponent name={'chevron'} size={15} />
                </span>
            </button>
            <div data-opened={isOpened} className={'absolute z-[100] top-[120%] h-[200px] left-0 shadow-lg w-full overflow-auto bg-lightTheme rounded-[10px] py-[10px] transition-all duration-500 data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="false"]:opacity-0 data-[opened="false"]:invisible'}>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    );
}