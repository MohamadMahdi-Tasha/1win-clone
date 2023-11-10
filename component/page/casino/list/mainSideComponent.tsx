// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import CategoryGameBannerComponent from "@/chunk/page/casino/categoryGameBannerComponent";

// Creating and exporting main side component of casino page as default
export default function MainSideComponent():ReactNode {
    // Defining states of component
    const [fakeGameData, setFakeData]:[{img: string, link: string, name: string}[], Dispatch<any>] = useState([{
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif',
        link:'#', name: 'Lucky Jet'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif',
        link:'#', name: 'Rocket Queen'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif',
        link:'#', name: 'Speed & Cash'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif',
        link:'#', name: 'Coinflip'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif',
        link:'#', name: 'Rocket X'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif',
        link:'#', name: 'Lucky Jet'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif',
        link:'#', name: 'Rocket Queen'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif',
        link:'#', name: 'Speed & Cash'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif',
        link:'#', name: 'Coinflip'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif',
        link:'#', name: 'Rocket X'
    },{
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif',
        link:'#', name: 'Lucky Jet'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif',
        link:'#', name: 'Rocket Queen'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif',
        link:'#', name: 'Speed & Cash'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif',
        link:'#', name: 'Coinflip'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif',
        link:'#', name: 'Rocket X'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif',
        link:'#', name: 'Lucky Jet'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif',
        link:'#', name: 'Rocket Queen'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif',
        link:'#', name: 'Speed & Cash'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif',
        link:'#', name: 'Coinflip'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif',
        link:'#', name: 'Rocket X'
    },{
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif',
        link:'#', name: 'Lucky Jet'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif',
        link:'#', name: 'Rocket Queen'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif',
        link:'#', name: 'Speed & Cash'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif',
        link:'#', name: 'Coinflip'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif',
        link:'#', name: 'Rocket X'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif',
        link:'#', name: 'Lucky Jet'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif',
        link:'#', name: 'Rocket Queen'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif',
        link:'#', name: 'Speed & Cash'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif',
        link:'#', name: 'Coinflip'
    }, {
        img: 'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif',
        link:'#', name: 'Rocket X'
    }]);

    // Returning JSX
    return (
        <main className={'lg:col-span-3'}>
            <span className={'font-bold text-white lg:text-[30px] text-[15px] block mb-[20px]'}>New</span>
            <ul className={'grid grid-cols-5 gap-[20px]'}>
                {
                    fakeGameData.map((fakeGame, index) => (
                        <CategoryGameBannerComponent key={index} img={fakeGame.img} link={fakeGame.link} name={fakeGame.name} />
                    ))
                }
            </ul>
        </main>
    );
}