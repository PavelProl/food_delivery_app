import React from "react";
import styles from "./Tab.module.css";
import classnames from "classnames";

export const Tab = ({ tabName, onClick, isActive, className }) => {
  return (
    <button
        className={classnames(styles.root, className, {
            [styles.rootActive]: isActive
        })}
        onClick={onClick}
    >
      {tabName}
    </button>
  );
};
