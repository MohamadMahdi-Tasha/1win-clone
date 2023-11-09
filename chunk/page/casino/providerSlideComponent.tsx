// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    name: string;
    gamesCount: number;
    link: string;
    profileImg: 'no-img' | string;
    images: [string, string, string, string, string, string] | [string];
}

// Creating and exporting providers slide component as default
export default function ProviderSlideComponent({gamesCount, images, name, link, profileImg}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'block p-[10px] rounded-[10px] bg-lightTheme'}>
            <div className={'flex items-center gap-[10px] w-full mb-[20px]'}>
                {
                    (profileImg === 'no-img')
                        ? <div className={'w-[30px] h-[30px] shrink-0 bg-green rounded-full'} />
                        : <img src={profileImg} alt={name} className={'w-[30px] h-[30px] shrink-0'} />
                }
                <div className={'w-full overflow-hidden'}>
                    <span className={'text-white truncate w-full text-[12px] block'}>{name}</span>
                    <span className={'text-white/50 truncate text-[10px] block'}>{gamesCount} games </span>
                </div>
            </div>
            <div className={'grid grid-cols-3 gap-[10px]'}>
                {
                    (images.length === 1)
                        ? (
                            [...new Array(6)].map(() => (
                                <img className={'rounded-[10px]'} src={images[0]} alt="Image of recent games" />
                            ))
                        ) : (
                            images.map((image) => (
                                <img className={'rounded-[10px]'} src={image} alt="Image of recent games" />
                            ))
                        )
                }
            </div>
        </Link>
    );
}