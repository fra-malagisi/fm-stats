"use client";

import { css } from "@/styled-system/css";
import { vstack } from "@/styled-system/patterns";
import clsx from "clsx";
import React from "react";

type InputTextProps = {
  label: string;
  required?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, required, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isDirty, setIsDirty] = React.useState(false);

    return (
      <div
        className={vstack({
          position: "relative",
          width: "100%",
        })}
      >
        <input
          {...props}
          placeholder=" "
          ref={ref}
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setIsDirty(!!e.target.value)}
          required={required}
          className={clsx(
            css({
              width: "100%",
              backgroundColor: "transparent",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "secondary.inverted",
              color: "primary.inverted",
              paddingX: 5,
              _hover: {
                borderBottomColor: "primary.inverted",
              },
            }),
            (isFocused || isDirty) &&
              css({
                borderBottomColor: "primary.inverted",
              })
          )}
        />
        <label
          className={clsx(
            css({
              transitionProperty: "all",
              transitionDuration: "0.4s",
              transitionTimingFunction: "ease-in-out",
              position: "absolute",
              left: 3,
              color: "secondary.inverted",
            }),
            (isFocused || isDirty) &&
              css({
                transform: "translateY(-20px)",
                fontSize: "0.8rem",
                color: "primary.inverted",
              })
          )}
        >
          {label} {required && <span>*</span>}
        </label>
        {error && <span>{error}</span>}
      </div>
    );
  }
);

InputText.displayName = "InputText";

export default InputText;
