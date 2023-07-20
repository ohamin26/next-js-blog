import Image from 'next/image'
import img from '@/public/images/myImg.jpg'
export default function about() {
    return (
        <div className="flex justify-center">
            <div className="card grid grid-cols-2">
                <div className="img">
                    <Image src={img} width={0} height={0} alt="Pic"></Image>
                </div>
                <p className="pr-16 text-2xl">about my portfolio</p>
            </div>
        </div>
    )
}
