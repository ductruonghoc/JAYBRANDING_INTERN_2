import Image from "next/image";
const HKKLogoSrc:string = "https://hkkzipper.com/wp-content/uploads/2022/07/HKK-trans-e1678259002605.png.webp"; //Logo src
export default function Branding() {
    return (
        <div
            className="relative
                     md:pt-[90px]
                     flex items-center justify-center
                     max-md:pt-[36px]">
            <div
                className="
                    relative z-0
                    md:w-[560px] md:h-[639px]
                    flex md:gap-[6px]
                    max-md:w-[391px] max-md:h-[446px] max-md:gap-[9px]"
            >
                <div
                    className="md:w-[274px]
                                flex flex-col md:gap-[6px]
                                max-md:w-[191px] max-md:gap-[9px]">
                    <div
                        className="
                            w-full                          
                            md:h-[304px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] md:bg-[length:560px_639px] bg-left-top
                            max-md:h-[212px] max-md:bg-[length:391px_446px]">
                    </div>
                    <div
                        className="
                            w-full                          
                            h-[323px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] md:bg-[length:560px_639px] bg-left-bottom
                            max-md:h-[226px] max-md:bg-[length:391px_446px]">

                    </div>
                </div>
                <div
                    className="md:w-[274px]
                                flex flex-col md:gap-[6px]
                                max-md:w-[191px] max-md:gap-[9px]">
                    <div
                        className="
                            w-full                          
                            h-[355px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] md:bg-[length:560px_639px] bg-right-top
                            max-md:h-[248px] max-md:bg-[length:391px_446px]">
                    </div>
                    <div
                        className="
                            w-full                          
                            md:h-[238px]
                            rounded-[12px]
                            bg-[url('img/bluebag.jpg')] bg-[length:560px_639px] bg-[right_bottom_-36px]
                            max-md:h-[148px] max-md:bg-[length:391px_446px] max-md:bg-[right_bottom_-41px]">

                    </div>
                </div>
            </div>
            <div
                className="absolute 
                            md:w-[202px] md:h-[202px]
                            rounded-full
                            bg-white
                            flex justify-center items-center
                            outline outline-1 md:outline-offset-[27px] outline-white
                            max-md:w-[160px] max-md:h-[160px] max-md:outline-offset-[21px]">
                <Image
                    src={HKKLogoSrc}
                    alt="HKK Logo"
                    className="max-md:h-[39px] max-md:w-[109px]"
                    width={138}
                    height={49}/>
            </div>
        </div>
    )
}