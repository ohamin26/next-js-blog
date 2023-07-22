import Image from 'next/image'
import img from '@/public/images_black/myImg.jpg'
import { useScroll } from '../hooks/useScroll'
export default function about() {
    return (
        <div className="flex justify-center " {...useScroll('right', 1, 0)}>
            <div className="card grid grid-cols-2">
                <div className="img">
                    <Image src={img} width={0} height={0} alt="Pic"></Image>
                </div>
                <p className="pr-16 text-2xl">about my portfolio</p>
            </div>
        </div>
    )
}
