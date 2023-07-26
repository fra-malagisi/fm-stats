import { hstack } from "@/styled-system/patterns";
import { ReactElement } from "react";
import LinkHeader from "./link-header.component";
import { css } from "@/styled-system/css";

const Header = (): ReactElement => (
  <header
    className={css({
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "primary.inverted",
    })}
  >
    <nav
      className={hstack({
        backgroundColor: "primary",
        padding: "10px",
      })}
    >
      <div>
        <a href="#/home" className={css({ color: "primary.inverted" })}>
          FM Stats
        </a>
      </div>
      <ul className={hstack({ justify: "end", flexGrow: 1 })}>
        <LinkHeader href="/today" label="Today" />
        <LinkHeader href="/history" label="History" />
        <LinkHeader href="/settings" label="Settings" />
      </ul>
    </nav>
  </header>
);

export default Header;
