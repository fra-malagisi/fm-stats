import { css } from "@/styled-system/css";
import { vstack } from "@/styled-system/patterns";
import { title } from "@/ui";
import { ReactElement } from "react";

const Home = (): ReactElement => (
  <section className={vstack({})}>
    <h1 className={title()}>Daily stats</h1>
  </section>
);

export default Home;
