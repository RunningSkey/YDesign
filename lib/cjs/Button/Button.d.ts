import React from "react";
import './index.less';
declare const Button: (props: {
    children: React.ReactNode;
    type?: "default" | "primary";
}) => JSX.Element;
export default Button;
