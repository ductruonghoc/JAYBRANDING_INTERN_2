
import Image from "next/image"
import thumbnailSrc from "./img/sample1.avif"
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