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
        svg: <YoutubeLogo/>,
        name: "Youtube"
    }
]

export default function SocialMediaComponent() {
    return (
        <div
            className="py-[5px]
                        flex gap-[16px]
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
    )
}