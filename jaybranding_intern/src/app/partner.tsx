import Image from "next/image";
import lightbulb_bg from "./img/lightbulbs_bg.jpg";
import { CustomArrowLeftIcon, CustomArrowRightIcon, LabelNumber } from "./utility";

const Items_Component = () => {
    return (
        <div
            className="md:w-[1144px] md:pt-[20px]
                        flex flex-col md:gap-[20px]
                        max-md:w-full max-md:gap-[136px] max-md:pt-[136px]">
            <div
                className="w-full
                            flex md:flex-wrap md:gap-[20px]
                            max-md:flex-col max-md:h-[210px] max-md:overflow-hidden max-md:gap-[136px]">
                {
                    Array<string>(8).fill("//Logo//").map((_, idx) => (
                        <strong
                            className="md:w-[255px] md:h-[96px]
                                        flex items-center justify-center
                                        md:bg-white 
                                        text-gray-200 text-nowrap text-[30px]
                                        max-md:h-[37px]"
                            key={idx}>
                            {_}
                        </strong>
                    ))
                }
            </div>
            <div
                className="w-full
                            flex justify-center gap-[60px]">
                <CustomArrowLeftIcon
                    stroke_color={1} />
                <CustomArrowRightIcon
                    stroke_color={1} />
            </div>
        </div>
    )
}

const Label = () => {
    return (
        <div
            className="flex justify-between items-end">
            <div
                className="relative
                            max-md:w-full">
                <div
                    className="absolute md:top-0
                                max-md:top-[39px] max-md:w-full max-md:flex max-md:justify-center">
                    <LabelNumber
                        text_color={2}
                        text_stroke_color={2}
                        line_height={2}
                        no="04" />
                </div>
                <div
                    className="relative
                                md:ps-[108px] md:pt-[117px]
                                flex gap-[10px]
                                text-[40px] text-sky-700
                                max-md:pt-[103px] max-md:w-full max-md:justify-center">
                    <div>
                        ĐỐI TÁC
                    </div>
                    <strong>
                        CỦA HKK
                    </strong>
                </div>
            </div>
            <strong
                className="text-gray-400 text-[87px] leading-none
                            max-md:hidden">
                Partners
            </strong>
        </div>
    )
}

export default function PartnerComponent() {
    return (
        <div
            className="relative
                        w-full 
                        flex justify-center">
            <div
                className="absolute top-0
                            w-full h-full">
                <Image
                    src={lightbulb_bg}
                    alt="bg"
                    loading="lazy"
                    className="w-full h-full
                                opacity-5
                                object-cover"/>
            </div>
            <div
                className="relative
                            flex flex-col
                            md:pb-[40px]
                            max-md:w-full max-md:pb-[471px]">
                <Label />
                <Items_Component />
            </div>
        </div>
    )
}