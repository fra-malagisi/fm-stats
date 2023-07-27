"use client";

import React, { ReactElement } from "react";
import {
  RadioGroupProps,
  RadioGroupState,
  useRadioGroupState,
} from "react-stately";
import { useRadioGroup } from "react-aria";
import { hstack } from "@/styled-system/patterns";

export type RadioGroupComponentProps = {
  children?: React.ReactNode;
} & RadioGroupProps;

export const RadioContext = React.createContext<RadioGroupState | null>(null);

const RadioGroup = ({
  label,
  description,
  errorMessage,
  validationState,
  ...props
}: RadioGroupComponentProps): ReactElement => {
  const state = useRadioGroupState({
    label,
    description,
    ...props,
  });

  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);
  return (
    <div {...radioGroupProps}>
      <div className={hstack({})}>
        <label {...labelProps}>{label}</label>
        <RadioContext.Provider value={state}>
          {props.children}
        </RadioContext.Provider>
      </div>
      {description && <div {...descriptionProps}>{description}</div>}
    </div>
  );
};

export default RadioGroup;
