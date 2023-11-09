// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import CategoryGameWTitleComponent from "@/chunk/page/casino/categoryGameWTitleComponent";
import CategoryGameBannerComponent from "@/chunk/page/casino/categoryGameBannerComponent";
import ProviderSlideComponent from '@/chunk/page/casino/providerSlideComponent';
import RecentWinsComponent from '@/chunk/page/casino/recentWinsComponent';
import {SwiperSlide} from "swiper/react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting main side component of casino page as default
export default function MainSideComponent():ReactNode {
    // Returning JSX
    return (
        <main className={'col-span-3'}>
            <CategoryGameWTitleComponent title={'1win games'} count={13} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'New'} count={69} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'Quick games'} count={196} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'Jackpots'} count={440} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'Slots'} count={6941} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'Only on 1win'} count={16} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'Top games'} count={191} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'Grand Holliday $500'} count={333} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'Bonus buy'} count={887} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'All games'} count={7944} allLink={'#'}>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} link={'#'} name={'Lucky Jet'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d5875264-72eb-4341-8f26-a2f885a2851d.jpg@avif'} link={'#'} name={'Rocket Queen'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/9dd18146-c273-48b4-ab55-70c3042a3f64.png@avif'} link={'#'} name={'Speed & Cash'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/d8c068a7-ff11-4f10-9ad2-c49a04a8ea6d.png@avif'} link={'#'} name={'Coinflip'} /></SwiperSlide>
                <SwiperSlide><CategoryGameBannerComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/576a0d3a-0df0-4a5b-ac90-7e9f2ab73407.png@avif'} link={'#'} name={'Rocket X'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <CategoryGameWTitleComponent title={'All games'} count={7944} allLink={'#'}>
                <SwiperSlide><ProviderSlideComponent link={'#'} name={'Evolution Gaming'} images={['https://imgproxy.1win-cdn.com/unsafe/casino_list_medium_1x/plain/https://1win-cdn.com/casino-images/habanero/c_44152991d4e2535086e80deb1547522b.png@avif']} gamesCount={43} profileImg={'no-img'} /></SwiperSlide>
                <SwiperSlide><ProviderSlideComponent link={'#'} name={'Habanero'} images={['https://imgproxy.1win-cdn.com/unsafe/casino_list_medium_1x/plain/https://1win-cdn.com/casino-images/habanero/c_44152991d4e2535086e80deb1547522b.png@avif']} gamesCount={177} profileImg={'no-img'} /></SwiperSlide>
                <SwiperSlide><ProviderSlideComponent link={'#'} name={'Apollo Play'} images={['https://imgproxy.1win-cdn.com/unsafe/casino_list_medium_1x/plain/https://1win-cdn.com/casino-images/habanero/c_44152991d4e2535086e80deb1547522b.png@avif']} gamesCount={52} profileImg={'no-img'} /></SwiperSlide>
            </CategoryGameWTitleComponent>
            <div>
                <div>
                    <div>
                        <span>Recent wins</span>
                        <span>13500</span>
                    </div>
                    <IconComponent name={'info'} size={10} />
                </div>
                <ul>
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                    <RecentWinsComponent img={'https://imgproxy.1win-cdn.com/unsafe/casino_list_big_1x/plain/https://1win-cdn.com/casino-images/1play/5b4ab347-f37c-44e4-93e6-2c1c0efa069e.jpg@avif'} email={'imwhdiiii@gmail.com'} price={120} gameTitle={'Energy Coins'} />
                </ul>
            </div>
        </main>
    );
}