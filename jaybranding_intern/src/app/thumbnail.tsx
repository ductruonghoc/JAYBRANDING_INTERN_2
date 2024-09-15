
import Image from "next/image"
import thumbnailSrc from "./img/sample1.avif"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const pointStyle:Array<string> = [
    "bg-white p-[6px]",
    "bg-white p-[6px]",
    "bg-sky-700 px-[14.5px] py-[6px]",
    "bg-white p-[6px]",
    "bg-white p-[6px]"
]

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
                className="absolute top-0 w-full h-full
                            bg-black opacity-50">
            </div>
            <div
                className="relative top-0
                            flex justify-center
                            w-full h-full
                            max-md:hidden">
                <div
                    className="relative h-full 
                                flex items-center gap-[59px]">
                    <div
                        className="relative h-[31px]
                                    overflow-hidden
                                    cursor-pointer">
                        <ArrowLeftIcon
                            className="stroke-white
                                        stroke-[.5px]"
                            width={62} />
                    </div>
                    <div
                        className="flex flex-col items-center gap-[15px]
                                    text-white">
                        <div
                            className="text-[40px] text-nowrap">
                            CHÀO MỪNG ĐẾN VỚI
                        </div>
                        <strong
                            className="text-[60px] text-nowrap">
                            KHÓA KÉO HOÀN MỸ - HKK
                        </strong>
                        <div
                            className="w-[798px]
                                        text-[16px] text-center">
                            Thương hiệu dây khoá kéo HKK của Công ty TNHH Khóa kéo Hoàn Mỹ (HKK) đã gia nhập hàng loạt thị trường vốn được đánh giá là khó tính trong khu vực và trên thế giới. Chặng đường 31 năm của thương hiệu này là một hành trình nỗ lực không ngừng, với quyết tâm và tầm nhìn của những người lèo lái "con thuyền" HKK vươn ra biển lớn.
                        </div>
                        <button
                            className="bg-white 
                                        flex gap-[10px] items-center
                                        py-[8px] px-[32px]
                                        text-[14px] text-sky-700 text-nowrap
                                        drop-shadow-[6px_6px_0_rgba(29,78,216,1)]">
                            <ArrowRightIcon
                                className="stroke-sky-700"
                                width={12}/>
                            <div>
                                TÌM HIỂU THÊM
                            </div>
                        </button>
                    </div>
                    <div
                        className="relative h-[31px]
                                    overflow-hidden
                                    cursor-pointer">
                        <ArrowRightIcon
                            className="stroke-white
                                        stroke-[.5px]"
                            width={62} />
                    </div>
                    <div 
                        className="absolute top-[714px] 
                                    w-full
                                    flex justify-center gap-[12px]">
                        {
                            pointStyle.map((_, idx) => {
                                return(
                                    <div 
                                        key={idx}
                                        className={`${_} rounded-full`}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}