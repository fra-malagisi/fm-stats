import { css } from "@/styled-system/css";
import { ReactElement } from "react";

type LinkHeaderProps = {
  href: string;
  label: string;
};

const LinkHeader = ({ href, label }: LinkHeaderProps): ReactElement => (
  <li>
    <a href={href} className={css({ _hover: { color: "yellow" } })}>
      {label}
    </a>
  </li>
);

export default LinkHeader;
