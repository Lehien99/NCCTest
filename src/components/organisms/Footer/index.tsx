import React from 'react'
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}><p className={cx('footer-paragraph')}>Copyright © 2021</p></div>
  )
}

export default Footer