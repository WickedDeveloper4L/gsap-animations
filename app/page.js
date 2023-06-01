import Links from "./components/links/Links";
import styles from "./page.module.scss";
export const metadata = {
  title: "GSAP animations",
  description: "Different animations with Gsap",
};
export default function page() {
  return (
    <div className={styles.main}>
      <Links />
    </div>
  );
}
