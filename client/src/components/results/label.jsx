import { invertColor } from "../../utils/color-util";

export const Label = ({ color, name }) => <span  style={{ backgroundColor: "#" + color, color: invertColor(color) }} className="text-xs rounded-lg px-1 mx-1 leading-4 py-0 h-4 whitespace-nowrap flex">
    {name}
</span>