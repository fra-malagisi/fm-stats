"use client";

import React, { ReactElement } from "react";

import { RadioGroupState } from "react-stately";

import { AriaRadioProps, useRadio } from "react-aria";
import { RadioContext } from "./radio-group.component";
import { css } from "@/styled-system/css";

export type InputRadioProps = {
  children: React.ReactNode;
} & AriaRadioProps;

const InputRadio = ({ children, ...props }: InputRadioProps): ReactElement => {
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state as RadioGroupState, ref);
  return (
    <label>
      <input
        {...inputProps}
        ref={ref}
        className={css({
          width: "1rem",
          height: "1rem",
          accentColor: "tertiary",
        })}
      />
      <span className={css({ marginLeft: "0.5rem" })}>{children}</span>
    </label>
  );
};

export default InputRadio;
