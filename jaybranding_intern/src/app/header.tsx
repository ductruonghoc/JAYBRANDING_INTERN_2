import Image from "next/image"
import Navigator from "./navigator";
import SocialMediaComponent from "./social_media";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

const HKKLogoSrc:string = "https://hkkzipper.com/wp-content/uploads/2022/07/HKK-trans-e1678259002605.png.webp"; //Logo src

export default function Header(){
    return (
        <div
            className="w-full md:py-[4px]
                        flex md:gap-[74px] md:justify-center items-center
                        bg-white
                        max-md:py-[9px] max-md:px-[3px] max-md:justify-between max-md:flex-row-reverse"
        >
            <div>{/*Logo */}
                <Image
                    loading="lazy"
                    width={187}
                    height={66}
                    alt="HKK Logo"
                    src={HKKLogoSrc}/>
            </div>{/*NAv bar */}
            <div
                className="
                            flex flex-col gap-[9px] items-end justify-center max-md:hidden">
                <SocialMediaComponent/>
                <Navigator/>
            </div>
            <div className="md:hidden">
                <Bars3BottomLeftIcon
                    className="cursor-pointer"
                    height={40}/>
            </div>
        </div>
    )
}