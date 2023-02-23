import style from "./Container.modyle.css";
import classNames from "classNames";

export const Container = ({ className }) => (<div className={classNames(style.container,
  className)}></div>
);