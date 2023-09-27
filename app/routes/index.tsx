import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { INTRO, WORKS } from "~/MyData";
import { Chat } from "~/components/Chat/Chat";
import { Works } from "~/components/Works/Works";

import styles from "../styles/index.module.css"

export const meta: V2_MetaFunction = () => [{ title: "Home Sweet Home" }];

export default function Index() {
  return (
    <div className={styles.home}>
      <Chat data={INTRO} />
      <Works works={WORKS} />
    </div>
  );
}
