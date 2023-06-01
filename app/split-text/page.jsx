"use client";
import styles from "./split.module.scss";
import { gsap, Power3 } from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
export default function Page() {
  const target = useRef(null);
  const target2 = useRef(null);
  let main = useRef(null);
  const tl = gsap.timeline();
  useEffect(() => {
    const text = new SplitType(target.current);
    const text2 = new SplitType(target2.current);
    gsap.to(main, {
      visibility: "visible",
      duration: 0,
    });
    tl.from(text.chars, {
      opacity: 0,
      y: 40,
      stagger: { amount: 1 },
      ease: Power3.easeOut,
      duration: 0.5,
    }).from(text2.chars, {
      x: 20,
      opacity: 0,
      stagger: { amount: 1 },
      ease: Power3.easeOut,
      duration: 0.5,
    });
  }, [target, target2, tl]);
  return (
    <div ref={(el) => (main = el)} className={styles.main}>
      <h1 ref={target} className={styles.text}>
        TEXT TO BE ANIMATED
      </h1>
      <h1 ref={target2} className={styles.text2}>
        TEXT TO BE ANIMATED
      </h1>
    </div>
  );
}
