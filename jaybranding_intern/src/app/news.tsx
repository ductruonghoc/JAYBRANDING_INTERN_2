import { LabelNumber } from "./utility"
import khoac_phao_bg from "./img/khoac_phao.jpg";
import sweater_bg from "./img/sweater.png";
import clothes_store_bg from "./img/clothes_store.jpg";
import Image, { StaticImageData } from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const items_bg:Array<StaticImageData> = [
    khoac_phao_bg,
    sweater_bg,
    clothes_store_bg
]

const Label = () => {
    return (
        <div
            className="relative">
            <div
                className="absolute md:top-0
                            max-md:left-[33px] max-md:top-[31px]">
                <LabelNumber
                    text_stroke_color={2}
                    text_color={0}
                    no="03"
                    line_height={2} />
            </div>
            <div
                className="relative md:pt-[117px] md:ps-[120px]
                            max-md:pt-[59px] max-md:ps-[138px]">
                <div
                    className="flex
                            text-nowrap text-sky-700 md:text-[40px]md:gap-[10px]
                            max-md:text-[22px] max-md:gap-[5px]">
                    <div>TIN TỨC</div>
                    <strong>
                        NỔI BẬT
                    </strong>
                </div>
            </div>
        </div>
    )
}

const Items_Component = () => {
    return (
        <div
            className="md:w-[1142px]
                        flex flex-col gap-[40px]
                        max-md:w-full">
            <div
                className="flex gap-[40px]
                            max-md:flex-wrap max-md:h-[558px] max-md:justify-center max-md:overflow-hidden">
               {
                    items_bg.map((_, idx) => {
                        return(
                            <div
                                className="w-[354px] h-[558px]
                                            flex flex-col gap-[27px]
                                            cursor-pointer"
                                key={idx}>
                                <div
                                    className="w-full h-[282px]">
                                    <Image
                                        loading="lazy"
                                        className="w-full h-full 
                                        object-fit"
                                        src={_}
                                        alt={`Item ${idx}`}/>
                                </div>
                                <div
                                    className="w-full
                                                flex flex-col gap-[16px]">
                                    <div
                                        className="w-full h-[64px]
                                                    ">
                                        <strong
                                            className="text-ellipsis overflow-hidden text-[24px]">
                                                Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...
                                        </strong>
                                    </div>
                                    <div
                                        className="w-full h-[125px]">
                                        <div
                                            className="text-ellipsis text-[16px]
                                                        ">
                                            Là một trong những bước quan trọng hàng đầu để đảm bảo sự thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan trọng của nghiên cứu...
                                        </div>
                                    </div>
                                    <div
                                        className="w-full
                                                    flex gap-[12px] items-center">
                                        <div
                                            className="text-sky-700 text-[14px] text-nowrap
                                                        ">
                                            XEM THÊM
                                        </div>
                                        <div
                                            className="relative 
                                                        grow
                                                        border-y border-gray-200">
                                            <div
                                                className="absolute -top-[1px]
                                                            w-[53px]
                                                            border-y border-sky-700">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
               }
            </div>
            <div
                className="w-full
                            flex justify-center">
                <button
                    className="button">
                    <ArrowRightIcon
                    width={12}/>
                    <div>
                        XEM THÊM TIN
                    </div>
                </button>
            </div>
        </div>
    )
}

export default function News() {
    return (
        <div
            className="w-full pb-[60px]
                        flex justify-center">
            <div
                className="flex flex-col md:gap-[48px]
                            max-md:gap-[28px]">
                <Label />
                <Items_Component/>
            </div>
        </div>
    )
}