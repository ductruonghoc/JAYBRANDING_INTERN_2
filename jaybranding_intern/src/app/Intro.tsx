import { ReactNode } from "react";
import Branding from "./branding";
import Background from "./img/white_geometric_bg.webp";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface AttractFact {
    no: number,
    unit: string
}

interface AttractFacts extends Array<AttractFact> { };

const attractFacts: AttractFacts = [
    {
        no: 31,
        unit: "NĂM KINH NGHIỆM"
    },
    {
        no: 700,
        unit: "CÔNG NHÂN"
    },
    {
        no: 200,
        unit: "NHÀ PHÂN PHỐI"
    },
]

const YoutubeLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            width="18"
            height="18"
            className="fill-sky-700"
            viewBox="0 0 50 50">
            <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
        </svg>
    )
}

interface ButtonContent {
    svg: ReactNode,
    text: string
}

interface ButtonContents extends Array<ButtonContent> { };

const buttonContents: ButtonContents = [
    {
        svg: <YoutubeLogo />,
        text: "VIDEO GIỚI THIỆU"
    },
    {
        svg: <ArrowRightIcon
            className="stroke-sky-700"
            width={12} />,
        text: "TÌM HIỂU THÊM"
    }
]

const DiamondLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
            width="20"
            height="20"
            viewBox="0 0 24 24">
            <path d="M21 1c-.438 1.438-1.563 2.562-3 3 1.437.438 2.562 1.563 3 3 .438-1.437 1.563-2.561 3-3-1.437-.438-2.562-1.562-3-3zm-19.001 2c-.292.957-1.042 1.708-1.999 2 .959.293 1.707 1.042 2.001 2 .292-.958 1.042-1.708 1.999-2-.957-.292-1.707-1.042-2.001-2zm18.5 16c-.365 1.196-1.303 2.134-2.499 2.5 1.199.366 2.134 1.303 2.501 2.5.365-1.197 1.303-2.134 2.499-2.5-1.196-.364-2.134-1.303-2.501-2.5zm-9.499-19c-.292.958-1.042 1.708-2 2 .959.293 1.708 1.042 2.002 2 .292-.958 1.042-1.708 1.998-2-.956-.292-1.706-1.042-2-2zm-8.001 18c-.435 1.436-1.563 2.561-2.999 3 1.439.439 2.564 1.564 3 3 .439-1.436 1.564-2.561 2.999-3-1.435-.437-2.56-1.564-3-3zm14.063-12h-10.054l-5.008 5.625 10 12.375 10-12.305-4.938-5.695zm-9.394 6l3.039 7.218-5.832-7.218h2.793zm7.579 0l-3.247 7.711-3.247-7.711h6.494zm-6.04-1l2.793-2.793 2.793 2.793h-5.586zm7.125 1h2.843l-5.899 7.259 3.056-7.259zm2.418-1h-2.543l-3-3h2.942l2.601 3zm-10.846-3h2.889l-3 3h-2.559l2.67-3z" />
        </svg>
    )
}

const Information = () => {
    return (
        <div
            className="flex flex-col gap-[24px]">
            <div
                className="relative">
                <div
                    className="absolute top-0
                                flex flex-col items-center
                                max-md:left-[9px]">
                    <div
                        className="h-[86px]
                                    border-x border-gray-200
                                    max-md:hidden"></div>
                    <strong
                        className="text-nowrap text-[72px] leading-none text-white text-stroke">
                        01
                    </strong>
                </div>
                <div
                    className="md:pt-[103px]
                                max-md:pt-[16px]">
                    <div
                        className="flex flex-col md:gap-[28px]
                                    max-md:gap-[26px]">
                        <strong
                            className="ps-[85px]
                                        text-[40px] text-sky-700 text-nowrap text-center
                                        max-md:ps-0">
                            GIỚI THIỆU
                        </strong>
                        <strong
                            className="text-[24px] text-nowrap 
                                        max-md:text-center">
                            VỀ KÉO HOÀN MỸ - HKK
                        </strong>
                        <div
                            className="md:w-[457px]
                                        max-md:text-center
                                        max-md:w-full
                                        max-md:px-[10px]">
                            {
                                "Hoàn thành thành lập năm 1989, là một trong những công ty đi đầu tiên trong lĩnh vực sản xuất dây khóa tại Việt Nam. Với công nghệ, hiện đại thiết bị và đồng bộ của Đức, Đài Loan cùng với đội ngũ kỹ sư, nhân viên có trình độ nghiệp vụ cao, sản phẩm dây kéo HKK được sản xuất theo tiêu chuẩn quốc tế (ASTM D2016 : 2007, BS 3084: 2006, CNS, JIS-S 3015 ....)."
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col gap-[19px]">
                <div
                    className="flex flex-col gap-[15px]
                                max-md:px-[9px]">
                    {
                        attractFacts.map((_, idx) => {
                            return (
                                <div
                                    className="flex gap-[12px] items-center"
                                    key={idx}>
                                    <div
                                        className="flex items-center justify-center
                                                    rounded-full
                                                    bg-sky-700
                                                    w-[46px] h-[46px]">
                                        <DiamondLogo></DiamondLogo>
                                    </div>
                                    <div
                                        className="flex items-end gap-[5px]">
                                        <strong
                                            className="leading-8 text-nowrap text-[24px] text-sky-700">
                                            {`+${_.no} `}
                                        </strong>
                                        <div
                                            className="leading-8 text-[18px]">
                                            {_.unit}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div
                    className="flex max-md:justify-center">
                    <div
                        className="flex gap-[20px]
                                    max-md:flex-col">
                        {
                            buttonContents.map((_, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        className="button">
                                        <div>
                                            {_.svg}
                                        </div>
                                        <div>
                                            {_.text}
                                        </div>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Introduce() {
    return (
        <div
            className="relative w-full
                    flex justify-center">
            <div
                className="absolute top-0
                        w-full h-full">
                <Image
                    width={3000}
                    height={2000}
                    src={Background}
                    alt="Background"
                    className="opacity-10 
                                object-cover
                                w-full h-full">

                </Image>
            </div>
            <div
                className="relative md:pb-[90px]
                            flex md:gap-[90px]
                            max-md:flex-col
                            max-md:pb-[36px] max-md:gap-[36px]">
                <Branding></Branding>
                <Information />
            </div>
        </div>
    )
}