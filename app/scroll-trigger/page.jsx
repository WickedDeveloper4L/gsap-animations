"use client";
import styles from "./scroll.module.scss";
import { gsap, Power3 } from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
export default function Page() {
  const target = useRef(null);
  const target2 = useRef(null);
  let main = useRef(null);
  const tl = gsap.timeline();

  gsap.registerPlugin(ScrollTrigger);

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

    ScrollTrigger.create({
      trigger: "#text1",
      start: "top 60%",
      markers: true,
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });
  }, [target, target2, tl]);
  return (
    <div className={styles.main}>
      <div className={styles.div}></div>
      <div ref={(el) => (main = el)} className={styles.textcon}>
        <h1 id="text1" ref={target} className={styles.text}>
          TEXT TO BE ANIMATED
        </h1>
        <h1 id="text2" ref={target2} className={styles.text2}>
          TEXT TO BE ANIMATED
        </h1>
      </div>
    </div>
  );
}
