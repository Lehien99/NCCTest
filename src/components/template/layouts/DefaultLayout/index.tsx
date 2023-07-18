import classNames from "classnames/bind";
import React from "react";
import styles from "./DefaultLayout.module.scss";
import SideBar from "../../../organisms/Sidebar";
import Content from "../../../organisms/Content";

interface IDefaultLayoutProps {
  children: React.ReactNode;
}
const cx = classNames.bind(styles);
const DefaultLayout: React.FC<IDefaultLayoutProps> = (
  props: IDefaultLayoutProps
) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sideBar")}>
        <SideBar />
      </div>
      <div className={cx("container")}>
          <Content>{props.children}</Content>
      </div>
    </div>
  );
};

export default DefaultLayout;
