import { flex, hstack, vstack } from "@/styled-system/patterns";
import { ReactElement } from "react";
import LinkHeader from "./link-header.component";
import { css } from "@/styled-system/css";

const Header = (): ReactElement => (
  <header
    className={css({
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "white",
    })}
  >
    <nav
      className={hstack({
        backgroundColor: "background",
        padding: "10px",
      })}
    >
      <div>
        <a href="#/home" className="navbar-brand">
          FM Stats
        </a>
      </div>
      <ul className={hstack({ justify: "center", flexGrow: 1 })}>
        <LinkHeader href="/home" label="Home" />
        <LinkHeader href="/players" label="Players" />
        <LinkHeader href="/teams" label="Teams" />
        <LinkHeader href="/matches" label="Matches" />
        <LinkHeader href="/about" label="About" />
      </ul>
    </nav>
  </header>
);

export default Header;
