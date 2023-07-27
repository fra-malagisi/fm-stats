import { hstack } from "@/styled-system/patterns";
import { ReactElement } from "react";
import { InputText } from "../input-text";
import { Button } from "../button";

const NewHabitForm = (): ReactElement => {
  return (
    <div className={hstack()}>
      <InputText label="Stat name" />
      <Button label="Add" />
    </div>
  );
};

export default NewHabitForm;
