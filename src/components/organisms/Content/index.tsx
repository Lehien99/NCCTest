import React from "react";
import Footer from "../Footer";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

interface IContentProps {
  children: React.ReactNode;
}
const Content: React.FC<IContentProps> = (props) => {
  return (
    <div className={cx("contentWrapper")}>
      <div className={cx("content-body")}>
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
