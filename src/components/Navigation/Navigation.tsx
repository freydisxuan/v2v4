import Link from "next/link";

import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Forsíða</Link>
        </li>
        <li>
          <Link href="/flokkar">Flokkar</Link>
        </li>
        <li>
          <Link href="/flokkar/breyta">Breyta flokkum</Link>
        </li>
      </ul>
    </nav>
  );
}
