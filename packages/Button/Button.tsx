import React from "react";
import classnames from "classnames";
import './index.less';
import { PREFIX } from './../_util/constants';


const Button = (props: {
  children: React.ReactNode;
  type?: "default" | "primary";
}) => {
  const cName = `${PREFIX}-btn`;
  return (
    <button
      className={classnames(cName, cName + '-' + (props.type || "default"))}
    >
      {props.children}
    </button>
  );
};

export default Button