import React, { useState } from "react";
import IconDirectionDown from "@/assets/icons/icon-direction-down-gray.svg";
import IconDirectionUp from "@/assets/icons/icon-direction-up-gray.svg";
import styles from "./index.module.scss";
import Label from "../Label";

export type Option = {
  optionLabel: string;
  value: string | number;
};

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  selected: Option | null;
  onChange: (selection: Option) => void;
}

const Selectbox = ({
  label,
  placeholder,
  selected,
  options,
  onChange,
}: SelectProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowOptions((prev) => !prev);
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    option: Option,
  ) => {
    if (e.key === "Enter") {
      onChange(option);
      setShowOptions(false);
    }
  };

  return (
    <div className={styles["select-wrapper"]}>
      {label && <Label htmlFor="selectbox">{label}</Label>}
      <div
        id="selectbox"
        onClick={() => setShowOptions(!showOptions)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className={styles.select}
        aria-expanded={showOptions}
      >
        <span>{selected ? selected.optionLabel : placeholder}</span>
        {showOptions ? <IconDirectionUp /> : <IconDirectionDown />}
      </div>
      {showOptions && (
        <ul className={styles.option}>
          {options.map((option) => (
            <li
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
              onKeyDown={(e) => handleOptionKeyDown(e, option)}
              key={option.value}
              className={styles.option__item}
              tabIndex={0}
              role="option"
              aria-selected={selected?.value === option.value}
            >
              <span>{option.optionLabel}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Selectbox;
