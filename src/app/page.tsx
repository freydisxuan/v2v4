
import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <h2>Hæhæ stelpur</h2>
    </div>
  );
}
