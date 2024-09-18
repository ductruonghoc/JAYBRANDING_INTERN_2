import Image, { StaticImageData } from "next/image";
import black_minimalist_bg from "./img/dark_bg.jpg";
import bct_mark from "./img/bct.webp";
import qr_mark from "./img/QR.webp";
import ssl_mark from "./img/ssl.png";

const certificates:Array<StaticImageData> = [
    bct_mark,
    qr_mark,
    ssl_mark
];

interface Location {
    name: string,
    address: string,
    contact?: string
};

interface Locations extends Array<Location>{}

const locations:Locations = [
    {
        name: "Văn Phòng Chính",
        address: "455 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM",
        contact: "028.3839.6231 - Fax: 028.3839.6235"
    },
    {
        name: "Nhà Máy HKK - Tân Uyên",
        address: "Đường DT747, Khu phố 7, P. Uyên Hưng, TX. Tân Uyên, Tỉnh Bình Dương"
    }
];

interface HyperLinks {
    name: string,
    hyper_links: Array<string>
};

const hyper_links:HyperLinks = {
    name: "Liên kết nhanh",
    hyper_links: [
        "Chính Sách Và Quy Định Chung",
        "Chính Sách Bảo Mật",
        "Sản Phẩm",
        "Hỗ Trợ Kỹ Thuật"
    ]
};

const DetailsComponent = () => {
    return (
        <div
            className="w-[1140px] h-[287px]
                        flex flex-col flex-wrap gap-x-[120px] gap-y-[28px] justify-center items-between">
            <strong
                className="text-[20px] text-nowrap">
                CÔNG TY TNHH KHOÁ KÉO HOÀN MỸ
            </strong>
            {
                locations.map((_, idx) => (
                    <div
                        key={idx}
                        className="w-[393px]
                                    flex flex-col gap-[3px]
                                    text-[16px]">
                        <strong>
                            {_.name}
                        </strong>
                        <div>
                            {_.address}
                        </div>
                        <div>
                            {_.contact}
                        </div>
                    </div>
                ))
            }
            <div
                className="flex flex-col
                            text-[16px]
                            cursor-pointer">
                <strong>
                    {hyper_links.name}
                </strong>
                <ul>
                {
                    hyper_links.hyper_links.map((_, idx) => (
                        <li
                            key={idx}>
                            {_}
                        </li>
                    ))
                }
                </ul>
            </div>
            <div
                className="flex flex-col gap-[16px]
                            w-[228px] h-[197px]">
                {
                    certificates.map((_, idx) => (
                        <Image
                            key={idx}
                            alt={`certificate ${idx}`}
                            src={_}
                            className="w-[181px]">
                        </Image>
                    ))
                }
            </div>
        </div>
    )
}

const socialChannel:Array<string> = [
    "Facebook",
    "Twitter",
    "Zalo",
    "Linkedin"
]

const CopyRightComponent = () => {
    return (
        <div
            className="w-[1140px] py-[20px]
                        flex justify-between  items-center
                        text-[14px] text-nowrap
                        opacity-50">
            <div>
                © 2020 Bản quyền thuộc về  HHK
            </div>
            <div
                className="flex gap-[3px]">
                {
                    socialChannel.map((_, idx) => (
                        <div
                            className="cursor-pointer"
                            key={idx}>
                            {`${_}${idx < socialChannel.length - 1 ? " |" : " "}`}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <div
            className="w-full
                        flex flex-col
                        text-white">
            <div
                className="relative 
                            w-full
                            flex justify-center">
                <Image
                    className="absolute top-0
                                w-full h-full
                                object-cover
                                "
                    loading="lazy"
                    alt="bg"
                    src={black_minimalist_bg}/>
                <div
                    className="absolute top-0
                                w-full h-full
                                bg-black
                                opacity-15">

                </div>
                <div
                    className="relative
                                py-[60px]
                                ">
                    <DetailsComponent/>
                </div>
            </div>
            <div
                className="bg-black
                            flex justify-center">
                <CopyRightComponent/>
            </div>
        </div>
    )
}