import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline"

const UKFlag = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32">
            <rect x="1" y="4" width="30" height="24" fill="#071b65"></rect>
            <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
        </svg>
    )
}

const VNFlag = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32">
            <rect x="1" y="4" width="30" height="24" fill="#c93728">
            </rect>
            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#ff5" d="M18.008 16.366L21.257 14.006 17.241 14.006 16 10.186 14.759 14.006 10.743 14.006 13.992 16.366 12.751 20.186 16 17.825 19.249 20.186 18.008 16.366z">
            </path>
        </svg>
    )
}

const FacebookLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-400"
            width="20"
            height="20"
            viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
        </svg>
    )
}

const YoutubeLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-400"
            width="20"
            height="20"
            viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
        </svg>
    )
}

const ZaloLogo = () => {
    return (
        <strong
            className="w-[20px] h-[20px]
                        flex justify-center items-center
                        bg-gray-400
                        rounded-full
                        text-[white] text-[7px]">
            Zalo
        </strong>
    )
}

interface SocialMedia {
    svg: React.ReactNode,
    name: string
}

interface SocialMediaList extends Array<SocialMedia> { };

const socialMediaList: SocialMediaList = [
    {
        svg: <FacebookLogo />,
        name: "Facebook"
    },
    {
        svg: <YoutubeLogo />,
        name: "Youtube"
    },
    {
        svg: <ZaloLogo />,
        name: "Zalo"
    }
]

export default function SocialMediaComponent() {
    return (
        <div
            className="flex items-center gap-[16px]
                        text-nowrap">
            <div
                className="py-[5px]
                        flex gap-[8px]
                        text-gray-400">
                {
                    socialMediaList.map((_, idx) => (
                        <div
                            className="flex items-center gap-[7px]
                                    cursor-pointer"
                            key={idx}>
                            {_.svg}
                            <div>
                                {_.name}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div
                className="h-[19px]
                            border-x border-gray-400"/>
            <div
                className="flex gap-[4px] items-center
                            cursor-pointer">
                <div className="flex items-center">
                    <ArrowLeftEndOnRectangleIcon
                        height={18}
                        className="stroke-gray-400" />
                    <div
                        className="text-[13px]">
                        ĐĂNG NHẬP
                    </div>
                </div>
                <div
                    className="flex gap-[6px]">
                    <VNFlag></VNFlag>
                    <UKFlag/>
                </div>
            </div>
        </div>
    )
}