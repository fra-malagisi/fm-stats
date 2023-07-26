import { cva } from "../styled-system/css";

export const button = cva({
  base: {
    backgroundColor: "primary.inverted",
    color: "primary",
    padding: "10px",
    transitionProperty: "all",
    transitionDuration: "0.4s",
    transitionTimingFunction: "ease-in-out",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "primary.inverted",
    _hover: {
      backgroundColor: "primary",
      color: "primary.inverted",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "primary.inverted",
    },
    _active: {
      backgroundColor: "primary.inverted",
      color: "primary",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "primary.inverted",
      transitionProperty: "all",
      transitionDuration: "0.1s",
      transitionTimingFunction: "ease-in-out",
    },
  },
});
