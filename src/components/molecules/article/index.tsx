import React from "react";
import { IArticles } from "../../../types/articles";
import classNames from "classnames/bind";
import styles from "./Article.module.scss";

interface IArticleProps {
  data?: IArticles;
}

const cx = classNames.bind(styles);

const Article: React.FC<IArticleProps> = (props) => {
  const { data } = props;
  return (
    <div className={cx("article-item")}>
      <h2>{data?.title}</h2>
      <div className={cx("article-item-body")}>
        <img className={cx("article-image")} src={data?.image} alt="logoNCC" />
        <p className={cx("article-item-content")}> {data?.content}</p>
      </div>
    </div>
  );
};

export default Article;
