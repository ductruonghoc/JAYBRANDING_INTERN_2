import Image from "next/image";
import lightbulb_bg from "./img/lightbulbs_bg.jpg";
import { CustomArrowLeftIcon, CustomArrowRightIcon, LabelNumber } from "./utility";

const Items_Component = () => {
    return (
        <div
            className="w-[1144px] pt-[20px]
                        flex flex-col gap-[20px]">
            <div
                className="w-full
                            flex flex-wrap gap-[20px]">
                {
                    Array<string>(8).fill("//Logo//").map((_, idx) => (
                        <strong
                            className="w-[255px] h-[96px]
                                        flex items-center justify-center
                                        bg-white 
                                        text-gray-200 text-nowrap text-[30px]"
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
                className="relative">
                <div
                    className="absolute top-0">
                    <LabelNumber
                        text_color={2}
                        text_stroke_color={2}
                        line_height={2}
                        no="04" />
                </div>
                <div
                    className="relative
                                ps-[108px] pt-[117px]
                                flex gap-[10px]
                                text-[40px] text-sky-700">
                    <div>
                        ĐỐI TÁC
                    </div>
                    <strong>
                        CỦA HKK
                    </strong>
                </div>
            </div>
            <strong
                className="text-gray-400 text-[87px] leading-none">
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
                            pb-[40px]">
                <Label />
                <Items_Component />
            </div>
        </div>
    )
}