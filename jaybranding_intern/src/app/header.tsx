import Image from "next/image"
import Navigator from "./navigator";
import SocialMediaComponent from "./social_media";

const HKKLogoSrc:string = "https://hkkzipper.com/wp-content/uploads/2022/07/HKK-trans-e1678259002605.png.webp"; //Logo src

export default function Header(){
    return (
        <div
            className="w-full py-[4px]
                        flex gap-[74px] justify-center items-center
                        bg-white"
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
                            flex flex-col gap-[9px] items-end justify-center">
                <SocialMediaComponent/>
                <Navigator/>
            </div>
        </div>
    )
}