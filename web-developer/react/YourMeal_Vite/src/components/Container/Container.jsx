import style from "./Container.module.css";
import classNames from "classNames";

export const Container = ({ children, className }) => (<div className={ classNames(style.container,
  className) }>
    {children}
  </div>
);