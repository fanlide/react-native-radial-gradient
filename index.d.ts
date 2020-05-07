import React from "react";
import { ViewProps } from "react-native";
interface PropsType extends ViewProps {
    center: number[];
    colors: string[];
    stops: number[];
    radius: number;
}
declare const RadialGradient: React.FC<PropsType>;
export default RadialGradient;
