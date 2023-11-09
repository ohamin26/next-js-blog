'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Content, Inter } from 'next/font/google'
import Header from '@/app/componets/layout/header'
import Footer from '@/app/componets/layout/footer'
import { RecoilRoot } from 'recoil'
import Image from 'next/image'
import img from '@/public/images_black/myImg.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'blog',
    description: 'blog',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </head>
            <body className={inter.className}>
                <RecoilRoot>
                    {/*<Image src={img} alt="img" className="fixed m-0 w-screen h-screen -z-[100]"></Image>*/}
                    <div className="flex flex-col h-full wrap">
                        <Header></Header>
                        <div className="flex-1">{children}</div>
                        <Footer></Footer>
                    </div>
                    <div className="noise"></div>
                </RecoilRoot>
            </body>
        </html>
    )
}
