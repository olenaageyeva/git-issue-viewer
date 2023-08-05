import { invertColor } from "../../utils/color-util";

export const Label = ({ color, name }) => <span
    style={{ backgroundColor: "#" + color, color: invertColor(color) }}
    className="text-xs font-semibold rounded-xl px-2 mx-1 leading-5 py-0 h-5 whitespace-nowrap flex">
    {name}
</span>