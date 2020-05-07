import React from "react";
import {processColor, requireNativeComponent, View, ViewProps, ViewStyle} from "react-native";

interface PropsType extends ViewProps {
  center: number[];
  colors: string[];
  stops: number[];
  radius: number;
}

const NativeRadialGradient = requireNativeComponent<{
  style: ViewStyle;
  colors: number[];
  center: number[];
  radius: number;
  stops: number[];
}>("SRSRadialGradient");

const RadialGradient: React.FC<PropsType> = ({children, colors, stops, center, radius, ...props}) => {
  return (
    <View {...props}>
      <NativeRadialGradient
        style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0}}
        colors={colors && colors.map(processColor)}
        center={center}
        radius={radius}
        stops={stops}
      />
      {children}
    </View>
  );
};

export default RadialGradient;
