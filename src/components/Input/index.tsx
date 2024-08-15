"use client";
import ms from "@/utils/modifierSelector";
import {
  InputHTMLAttributes,
  createElement,
  forwardRef,
  useState,
} from "react";
import IconPasswordHidden from "@/assets/icons/icon-password-hidden.svg";
import IconPasswordVisible from "@/assets/icons/icon-password-visible.svg";
import styles from "./index.module.scss";

type InputProps = {
  label?: string; 
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>; 

const cn = ms(styles, "input-field");

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, type = "text", ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);  
    }; 

    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    return (
      <div className={cn("", error ? "--error" : "")}>
        {label && (
          <label className={styles[label]}} htmlFor={id}>
            {label}
          </label>
        )} 
        <div className={styles["input-container"]}>
          {createElement("input", {
            className: styles[input] 
            id,
            type: inputType,
            ref,
            ...props,
          })}
          {type === "password" && (
            <button
              type="button"
              className={styles["btn-toggle-pw"]}}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <IconPasswordHidden />
              ) : (
                <IconPasswordVisible />
              )}
            </button>
          )}
        </div>
        {error && <p className={styles["error-message"]}>{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
