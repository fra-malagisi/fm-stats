import { Button } from "@/components/button";
import { InputRadio } from "@/components/input-radio";
import { InputText } from "@/components/input-text";
import { css } from "@/styled-system/css";
import { vstack } from "@/styled-system/patterns";
import { title } from "@/ui";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
const RadioGroup = dynamic(
  () => import("@/components/input-radio/radio-group.component"),
  {
    ssr: false,
  }
);

const Home = (): ReactElement => (
  <section className={vstack({})}>
    <h1 className={title()}>Daily stats</h1>
    <Button type="button" label="Button" />
    <InputText label="Importo" />
    <RadioGroup label="Prova" aria-label="prova">
      <InputRadio value="si" aria-label="si">
        Sì
      </InputRadio>
      <InputRadio value="no" aria-label="si">
        No
      </InputRadio>
    </RadioGroup>
  </section>
);

export default Home;
