
import Image from "next/image"
const thumbnailSrc:string = "https://us.loropiana.com/medias/sys_master/root/h85/hbd/10003756318750/LP-RD-EXTRA-BAG-NOV2023-DESK-1920x1080-001.jpg"
export default function Thumbnail() {
    return (
        <div
            className={`relative 
                        h-[766px] w-full`}>
            <Image
                src={thumbnailSrc}
                loading="lazy"
                alt="Background"
                width={1920/*Define render size important */} 
                height={1080}
                className="absolute w-full h-full
                            object-cover"/>
            <div
                className="relative top-0 w-full h-full
                            bg-black opacity-60">
            </div>
            <div>
                
            </div>
        </div>
    )
}