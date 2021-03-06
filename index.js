var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { processColor, requireNativeComponent, View } from "react-native";
var NativeRadialGradient = requireNativeComponent("SRSRadialGradient");
var RadialGradient = function (_a) {
    var children = _a.children, colors = _a.colors, stops = _a.stops, center = _a.center, radius = _a.radius, props = __rest(_a, ["children", "colors", "stops", "center", "radius"]);
    return (<View {...props}>
      <NativeRadialGradient style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }} colors={colors && colors.map(processColor)} center={center} radius={radius} stops={stops}/>
      {children}
    </View>);
};
export default RadialGradient;
//# sourceMappingURL=index.js.map