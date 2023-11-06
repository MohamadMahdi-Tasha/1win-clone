// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useRef, useEffect, MutableRefObject, Dispatch, useState} from "react";
import TopsideComponent from '@/component/headerComponent/topsideComponent';
import BottomsideComponent from "@/component/headerComponent/bottomsideComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Defining state of component
    const [isStickedToTop, setStickedToTop]:[boolean, Dispatch<boolean>] = useState(false);

    // Setting a ref to sticky part of header
    const stickyPartRef:MutableRefObject<any> = useRef();

    // Using useEffect hook to attach event listener of scroll to page which will change style of nav in header
    useEffect(() => {
        const stickyPart:HTMLDivElement = stickyPartRef.current;

        document.addEventListener('scroll', () => {
            const topOfElement:number = stickyPart.getClientRects()[0].top;

            (topOfElement === 0)
                ? setStickedToTop(true)
                : setStickedToTop(false)
        })
    }, [])

    // Returning JSX
    return (
        <>
            <header>
                <div className={'max-w-container mx-auto p-[20px]'}>
                    <TopsideComponent />
                </div>
            </header>
            <div className={'lg:sticky top-0 left-0 w-full z-[50]'} ref={stickyPartRef}>
                <div className={'max-w-container mx-auto px-[20px] lg:border-y-0 border-y border-y-white/20 lg:py-0 py-[20px]'}>
                    <BottomsideComponent isStickedToTop={isStickedToTop} />
                </div>
            </div>
        </>
    );
}