import { LabelNumber } from "./utility";
import nylon_zipper_bg from "./img/nylon_zipper.jpg";
import plastic_zipper_bg from "./img/plastic_zipper.jpg";
import metal_zipper_bg from "./img/metal_zipper.jpg";
import zipper_chain_bg from "./img/zipper_chain.webp";
import puller_bg from "./img/puller.jpg";
import other_bg from "./img/other.jpg";
import Image, { StaticImageData } from "next/image";

interface Item{
    label: string,
    bg: StaticImageData
}

interface Items extends Array<Item>{};

const items:Items = [
    {
        label: "NYLON ZIPPER",
        bg: nylon_zipper_bg
    },
    {
        label: "PLASTIC ZIPPER",
        bg: plastic_zipper_bg
    },
    {
        label: "METAL ZIPPER",
        bg: metal_zipper_bg
    },
    {
        label: "ZIPPER CHAIN",
        bg: zipper_chain_bg
    },
    {
        label: "PULLER",
        bg: puller_bg
    },
    {
        label: "SẢN PHẨM KHÁC",
        bg: other_bg
    },
]

const Items_Component = () => {
    return (
        <div
            className="flex flex-wrap gap-x-[68px] gap-y-[35px]
                        w-[1150px]">
            {
                items.map((_, idx) => (
                    <div
                        key={idx}
                        className="relative
                                    flex items-end
                                    w-[338px] h-[516px]
                                    ">
                        <Image
                            loading="lazy"
                            src={_.bg}
                            alt={_.label}
                            className="absolute top-0
                                        w-full h-full
                                        object-cover"/>
                        <div  
                            className="relative
                                        w-full">
                            <div
                                className="absolute top-0
                                            w-full h-full
                                            bg-gradient-to-t from-blue-950">
                            </div>
                            <div
                                className="relative pb-[47px]
                                            text-white
                                            flex flex-col gap-[16px]">
                                <div
                                    className="flex gap-[15px] items-end">
                                    <strong
                                        className="ps-[36px]
                                                    text-[72px] text-nowrap">
                                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                                    </strong>
                                    <div 
                                        className="w-[67px] h-0 mb-[35px]
                                                    border-y border-white"/>
                                </div>
                                <div
                                    className="px-[24px]
                                                text-[24px] text-nowrap">
                                    {_.label}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const Label = () => {
    return (
        <div
            className="relative">
            <div
                className="absolute">
                <LabelNumber
                    text_color={1}
                    text_stroke_color={1}
                    no="02"
                    line_height={1} />
            </div>
            <div
                className="relative pt-[105px]
                        text-white
                        flex flex-col gap-[10px]">
                <strong
                    className="ms-[107px] 
                                text-[40px]
                                text-nowrap">
                    CÁC SẢN PHẨM HKK
                </strong>
                <div
                    className="w-[651px]
                                text-[16px] text-center">
                    {
                        "Biểu tượng của sự dẻo dai, bền bỉ, đại diện cho sức mạnh toàn thể công ty Sẵn sàng vượt qua mọi thử thách để đạt được tiêu chuẩn dài hạn là phát triển thương"
                    }
                </div>
            </div>
        </div>
    )
}

export default function Products() {
    return (
        <div
            className="relative
                        w-full 
                        flex flex-col items-center gap-[35px]
                        bg-[url(img/lightbulbs_bg.jpg)] bg-cover">
            <div
                className="absolute top-0
                            w-full h-full
                            bg-blue-950
                            opacity-90">
            </div>
            <div
                className="relative
                            ">
                <Label />
            </div>
            <div
                className="relative pb-[40px]">
                <Items_Component></Items_Component>
            </div>
        </div>
    )
}