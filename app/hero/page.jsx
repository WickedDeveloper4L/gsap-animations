"use client";
import React, { useEffect, useRef } from "react";
import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
import styles from "./hero.module.scss";
import arrow from "../../images/back-arrow.svg";
import Image from "next/image";
import imageBoy from "../../images/224323.jpg";
import imageGirl from "../../images/224403.jpg";

export default function Page() {
  const tl = gsap.timeline();
  let hero = useRef(null);
  let boy = useRef(null);
  let girl = useRef(null);
  let imgboy = useRef(null);
  let imggirl = useRef(null);
  let headlineFirst = useRef(null);
  let headlineSecond = useRef(null);
  let headlineThird = useRef(null);
  let contentP = useRef(null);
  let contentBtn = useRef(null);
  useEffect(() => {
    // Full Section Animation
    gsap.to(hero, {
      visibility: "visible",
      duration: 1,
    });
    //Chained Animation for section
    tl.from(boy, {
      y: 1280,
      duration: 2,
      ease: Power3.easeOut,
    })
      .from(
        imgboy,
        {
          scale: 1.6,
          ease: Power3.easeOut,
          duration: 2,
        },
        0.2
      )
      .from(
        girl,
        {
          y: 1280,
          duration: 2,
          ease: Power3.easeOut,
        },
        0.3
      )
      .from(
        imggirl,
        {
          scale: 1.6,
          ease: Power3.easeOut,
          duration: 3,
        },
        0.4
      )
      .from(
        headlineFirst,
        {
          y: 44,
          opacity: 0,
          ease: Power3.easeOut,
          delay: 1.3,
          duration: 1,
        },
        0.15
      )
      .from(
        headlineSecond,
        {
          y: 44,
          opacity: 0,
          ease: Power3.easeOut,
          delay: 1.6,
          duration: 1,
        },
        0.15
      )
      .from(
        headlineThird,
        {
          y: 44,
          opacity: 0,
          ease: Power3.easeOut,
          delay: 1.9,
          duration: 1,
        },
        0.15
      )
      .from(
        contentP,
        {
          y: 20,
          opacity: 0,
          ease: Power3.easeOut,
          delay: 1,
          duration: 1,
        },
        1.4
      )
      .from(
        contentBtn,
        {
          y: 20,
          opacity: 0,
          ease: Power3.easeOut,
          delay: 1,
          duration: 1,
        },
        1.4
      );
  }, [tl]);
  return (
    <div ref={(el) => (hero = el)} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroContentInner}>
              <h1>
                <div
                  className={styles.heroContentLine}
                  ref={(el) => (headlineFirst = el)}
                >
                  <div className={styles.heroContentLineInner}>
                    Relieving the burden
                  </div>
                </div>
                <div
                  className={styles.heroContentLine}
                  ref={(el) => (headlineSecond = el)}
                >
                  <div className={styles.heroContentLineInner}>
                    of stress through
                  </div>
                </div>
                <div
                  className={styles.heroContentLine}
                  ref={(el) => (headlineThird = el)}
                >
                  <div className={styles.heroContentLineInner}>good music.</div>
                </div>
              </h1>
              <p ref={(el) => (contentP = el)}>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics
              </p>
              <div className={styles.btnRow} ref={(el) => (contentBtn = el)}>
                <button className={styles.exploreButton}>
                  explore{" "}
                  <div className={styles.arrowIcon}>
                    <Image src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.heroImages}>
            <div className={styles.heroImagesInner}>
              <div
                ref={(el) => (girl = el)}
                className={`${styles.heroImage} ${styles.girl}`}
              >
                <Image
                  className={styles.img}
                  src={imageGirl}
                  alt="image girl"
                  ref={(el) => (imggirl = el)}
                />
              </div>
              <div
                ref={(el) => (boy = el)}
                className={`${styles.heroImage} ${styles.boy}`}
              >
                <Image
                  className={styles.img}
                  src={imageBoy}
                  alt="image boy"
                  ref={(el) => (imgboy = el)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
