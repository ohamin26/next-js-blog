import React, { useState } from 'react'
import { useScroll } from '../hooks/useScroll'
import Image from 'next/image'
import img1 from '@/public/images_black/css.jpg'
import img2 from '@/public/images_black/html.jpg'
import img3 from '@/public/images_black/js.jpg'
import img4 from '@/public/images_black/next.jpg'
import img5 from '@/public/images_black/react.jpg'
import img6 from '@/public/images_black/recoil.jpg'
import img7 from '@/public/images_black/ts.jpg'
import color_img1 from '@/public/images/css.png'
import color_img2 from '@/public/images/html.png'
import color_img3 from '@/public/images/js.png'
import color_img4 from '@/public/images/next.png'
import color_img5 from '@/public/images/react.png'
import color_img6 from '@/public/images/recoil.png'
import color_img7 from '@/public/images/ts.png'
export default function skills() {
    return (
        <div className="flex justify-center xs:w-[70vw]" {...useScroll('right', 1, 0)}>
            <div className="card_skills place-items-center">
                <div className="grid justify-center">
                    <div className="grid items-center card_skill text-center lg:mt-28">
                        <p className="text-6xl xs:text-3xl">skills</p>
                    </div>
                </div>
                <div
                    className="w-4/5 h-fit grid lg:grid-rows-2 lg:grid-cols-4 place-items-center
                md:grid-rows-3 md:grid-cols-3 
                sm:grid-rows-4 sm:grid-cols-2 
                xs:grid-rows-6 xs:grid-cols-1"
                >
                    <div className="relative lg:left-10 md:left-10">
                        <Image src={img1} width={0} height={0} alt="Pic" className="card_img"></Image>
                        <Image src={color_img1} width={0} height={0} alt="Pic" className="card_color_img"></Image>
                    </div>
                    <div className="relative lg:left-10 md:left-10">
                        <Image src={img2} width={0} height={0} alt="Pic" className="card_img"></Image>
                        <Image src={color_img2} width={0} height={0} alt="Pic" className="card_color_img"></Image>
                    </div>
                    <div className="relative lg:left-10 md:left-10">
                        <Image src={img3} width={0} height={0} alt="Pic" className="card_img"></Image>
                        <Image src={color_img3} width={0} height={0} alt="Pic" className="card_color_img"></Image>
                    </div>
                    <div className="relative lg:left-10 md:left-10">
                        <Image src={img4} width={0} height={0} alt="Pic" className="card_img"></Image>
                        <Image src={color_img4} width={0} height={0} alt="Pic" className="card_color_img"></Image>
                    </div>
                    <div className="relative lg:left-10 md:left-10">
                        <Image src={img5} width={0} height={0} alt="Pic" className="card_img"></Image>
                        <Image src={color_img5} width={0} height={0} alt="Pic" className="card_color_img"></Image>
                    </div>
                    <div className="relative lg:left-10 md:left-10">
                        <Image src={img6} width={0} height={0} alt="Pic" className="card_img"></Image>
                        <Image src={color_img6} width={0} height={0} alt="Pic" className="card_color_img"></Image>
                    </div>
                    <div className="relative lg:left-10 md:left-10">
                        <Image src={img7} width={0} height={0} alt="Pic" className="card_img"></Image>
                        <Image src={color_img7} width={0} height={0} alt="Pic" className="card_color_img"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
