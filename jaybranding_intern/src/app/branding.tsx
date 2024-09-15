import Image from "next/image";
const HKKLogoSrc:string = "https://hkkzipper.com/wp-content/uploads/2022/07/HKK-trans-e1678259002605.png.webp"; //Logo src
export default function Branding() {
    return (
        <div
            className="relative
                     pt-[90px]
                     flex items-center justify-center">
            <div
                className="
                    relative z-0
                    w-[560px] h-[639px]
                    flex gap-[6px]"
            >
                <div
                    className="w-[274px]
                                flex flex-col gap-[6px]">
                    <div
                        className="
                            w-full                          
                            h-[304px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] bg-[length:560px_639px] bg-left-top">
                    </div>
                    <div
                        className="
                            w-full                          
                            h-[323px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] bg-[length:560px_639px] bg-left-bottom">

                    </div>
                </div>
                <div
                    className="w-[274px]
                                flex flex-col gap-[6px]">
                    <div
                        className="
                            w-full                          
                            h-[355px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] bg-[length:560px_639px] bg-right-top">
                    </div>
                    <div
                        className="
                            w-full                          
                            h-[238px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] bg-[length:560px_639px] bg-[right_bottom_-36px]">

                    </div>
                </div>
            </div>
            <div
                className="absolute 
                            w-[202px] h-[202px]
                            rounded-full
                            bg-white
                            flex justify-center items-center
                            outline outline-1 outline-offset-[27px] outline-white">
                <Image
                    src={HKKLogoSrc}
                    alt="HKK Logo"
                    width={138}
                    height={49}/>
            </div>
        </div>
    )
}