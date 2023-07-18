import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Wrapper from "../../molecules/Wrapper";

const cx = classNames.bind(styles);

interface IMenu {
  title: string;
  to: string;
}
const MENU: IMenu[] = [
  {
    title: "Home",
    to: "/home",
  },
  {
    title: "Services",
    to: "/services",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "New",
    to: "/new",
  },
  {
    title: "Contact",
    to: "/",
  },
];

const SideBar = () => {
  return (
    <div className={cx("sideBarWrapper")}>
      {MENU.map((menuItem, index) => {
        return (
          <Wrapper className={cx("title-SideBar")} key={index}>
            <h4> {menuItem.title} </h4>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default SideBar;
