import React from "react";
import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

interface IWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const cx = classNames.bind(styles);
const Wrapper: React.FC<IWrapperProps> = (props) => {
  return <div className={cx("wrapper", props.className)}>{props.children}</div>;
};

export default Wrapper;
