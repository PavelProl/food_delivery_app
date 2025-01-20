import React from "react";
import { Tab } from "../Tab/Tab";
import styles from "./Tabs.module.css";

export const Tabs = ({ tabs, onClick, activeTabIndex }) => {
  return (
    <div className={styles.root}>
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={tab}
            tabName={tab}
            onClick={() => onClick(index)}
            isActive={activeTabIndex === index}
            className={styles.tab}
          />
        );
      })}
    </div>
  );
};
