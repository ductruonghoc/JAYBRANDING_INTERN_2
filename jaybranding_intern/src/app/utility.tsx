interface LabelProps {
    text_stroke_color: number,
    no: string,
    line_height: number,
    text_color: number
}
const initLabelProps = {
    text_stroke_color: 0,
    no: "01",
    line_height: 0,
    text_color: 0
}
export const LabelNumber = ({ text_stroke_color, no, line_height, text_color }:
    LabelProps = initLabelProps) => {
    const line_height_class = [
        "h-[86px]",
        "h-[94px]",
        "h-[100px]"
    ]
    const text_stroke_color_class = [
        "text-stroke",
        "text-stroke-white",
        "text-stroke-sky-700"
    ]
    const text_color_class = [
        "text-white",
        "text-blue-950"
    ]
    const border_color_class = [
        "border-gray-200",
        "border-white",
        "border-sky-700"
    ]
    return (
        <div
            className="
                                flex flex-col items-center">
            <div
                className={
                    `${line_height_class[line_height]}
                    border-x ${border_color_class[text_stroke_color]}
                    max-md:hidden`
                }></div>
            <strong
                className={
                    `text-nowrap text-[72px] leading-none ${text_color_class[text_color]} ${text_stroke_color_class[text_stroke_color]}
                    `
                    }>
                {no}
            </strong>
        </div>
    );
}