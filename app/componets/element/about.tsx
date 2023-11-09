import Image from 'next/image'
import img from '@/public/images_black/myImg.jpg'
import { useScroll } from '../hooks/useScroll'
import img1 from '@/public/images/sec_img1.png'
import { useEffect, useState } from 'react'
import { Typing } from '@/app/componets/hooks/useTyping'
export default function about() {
    return (
        <div className="h-[600px]" {...useScroll('', 1, 0)}>
            <div className="flex justify-center items-center h-full">
                {/*<div className="">
                    <Image src={img1} width={300} height={200} alt="Pic" className=""></Image>
                </div>*/}
                <div className="">
                    <Typing text="프론트엔드 개발자 오하민입니다."></Typing>
                    {/*<p className="text-9xl tfont typing-ani">안녕하세요</p>*/}
                    {/*<p className="text-9xl tfont ">My page</p>*/}
                </div>
            </div>
        </div>
    )
}
