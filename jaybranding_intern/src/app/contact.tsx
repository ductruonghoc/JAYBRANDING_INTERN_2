import { ReactNode } from "react"
import { ChevronUpIcon } from "@heroicons/react/24/outline"
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid"

const ToStartLogo = () => {
    return (
        <div
            className="h-[46px] w-[46px]
                        flex justify-center items-center">
            <ChevronUpIcon
                width={24}>
            </ChevronUpIcon>
        </div>
    )
}
const FacebookLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-sky-700"
            width="47"
            height="47"
            viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
        </svg>
    )
}

const YoutubeLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-rose-700"
            width="46"
            height="46"
            viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
        </svg>
    )
}

const ChatLogo = () => {
    return (
        <div
            className="bg-amber-300
                        w-[46px] h-[46px]
                        flex justify-center items-center">
            <ChatBubbleOvalLeftEllipsisIcon
                width={25}
                className="fill-white"/>
        </div>
    )
}

const svgList: Array<ReactNode> = [
    <FacebookLogo key={0} />,
    <YoutubeLogo key={1} />,
    <ChatLogo key={2} />,
    <ToStartLogo key={3} />
]

export default function Contact() {
    return (
        <div
            className="flex flex-col gap-[12px]">
            {
                svgList.map((_, idx) => (
                    <div
                        key={idx}
                        className="bg-white
                            h-[46px] w-[46px]
                            overflow-hidden
                            rounded-full
                            border-0
                            cursor-pointer
                            shadow-md">
                        {_}
                    </div>)
                )
            }
        </div>
    )
}