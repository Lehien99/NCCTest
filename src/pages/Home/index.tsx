import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import images from "../../assets/images";
import { IArticles } from "../../types";
import Article from "../../components/molecules/article";

const cx = classNames.bind(styles);

const Articles: IArticles[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    image: images.iconFragment,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: images.iconFragment,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: images.iconFragment,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

const Home = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("Header")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logoNCC" />
        </div>
        <div className={cx("inner")}>
          <div className={cx("container")}>
            <h4>Lorem ipsum dolor sit asmet?</h4>
            <p className={cx("paragraph")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('articles')}>
        {Articles.map((article, index) => {
          return <Article key={index} data={article} />;
        })}
        </div>
      </div>
    </div>
  );
};

export default Home;
