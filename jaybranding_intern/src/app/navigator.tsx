import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { PhoneIcon } from "@heroicons/react/20/solid"

const navLabel: Array<string> = [
    "GIỚI THIỆU",
    "SẢN PHẨM",
    "HỖ TRỢ KỸ THUẬT",
    "TIN TỨC",
    "LIÊN HỆ"
];

export default function Navigator() {
    return (
        <div
            className="flex gap-[17px]">
            <div
                className="flex gap-[40px] items-center"> {/*Nav bar */}
                {
                    navLabel.map((_, idx) => (
                        <div
                            className="text-[16px] text-nowrap
                                                cursor-pointer"
                            key={idx}>
                            {_}
                        </div>
                    ))
                }
                <MagnifyingGlassIcon
                    height={19}
                    className="stroke-[3px]
                                        cursor-pointer"/>
            </div>
            <div
                className="relative 
                                ps-[56px] py-[5px] pe-[6px]
                                flex items-center gap-[8px]
                                border border-blue-500"> {/*Contact */}
                <div
                    className="absolute -top-[5px] left-[6px]
                                    flex flex-col items-center justify-center
                                    w-[43px] h-[43px]
                                    bg-sky-700"> {/*Logo */}
                    <PhoneIcon
                        width={30}
                        className="fill-white" />
                </div>
                <div
                    className="h-[27px]
                                border-x-2 border-sky-700"
                >
                </div>
                <div
                    className="
                                flex flex-col
                                text-sky-700">
                    <div
                        className="text-[12px]">
                        HOTLINE
                    </div>
                    <strong
                        className="text-[14px]">
                        0912.345.678
                    </strong>
                </div>
            </div>
        </div>
    )
}