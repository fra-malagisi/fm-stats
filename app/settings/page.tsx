import { vstack } from "@/styled-system/patterns";
import { title } from "@/ui";
import { NextPage } from "next";

const SettingsPage: NextPage = () => {
  return (
    <section className={vstack()}>
      <h1 className={title()}>Settings</h1>
    </section>
  );
};

export default SettingsPage;
