import style from "./Container.modyle.css";
import classNames from "classNames";

export const Container = ({ children, className }) => (<div className={ classNames(style.container,
  className) }></div>
);