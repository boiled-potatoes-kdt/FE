"use client";

import React, { useState } from "react";
import ms from "@/utils/modifierSelector";
import styles from "./index.module.scss";

interface ICategoryTab {
  id: string;
  label: string;
  content?: React.ReactNode;
}

interface ICategoryTabsProps {
  tabs: ICategoryTab[];
  activeTabId?: string;
  onChange?: (id: string) => void;
}

const cn = ms(styles, "category-tab__button");

const CategoryTab: React.FC<ICategoryTabsProps> = ({
  tabs,
  activeTabId,
  onChange,
}) => {
  const activeTabIdx = tabs.findIndex((tab) => tab.id === activeTabId);
  const [selectedTab, setSelectedTab] = useState(activeTabIdx);

  const handleTabClick = (index: number) => {
    const selectedId = tabs[index].id;
    setSelectedTab(index);
    if (onChange) {
      onChange(selectedId);
    }
  };

  const activeTab = onChange ? activeTabIdx : selectedTab;

  return (
    <div className={styles["category-tab"]}>
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          className={cn(index === activeTab && "--active")}
          onClick={() => handleTabClick(index)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
