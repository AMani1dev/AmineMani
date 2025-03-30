import { useEffect, useRef, useState, useMemo } from "react";
import "./home.css";

import CallToAction from "../../components/static/Footer/CallToAction";
import Ball from "../../components/ui/Ball";
import Btn from "../../components/ui/Btn";

import Arrow from "../../utils/Arrow";



export default function Home() {
  const scrollerInnerRef = useRef(null);
  const hasDuplicated = useRef(false);
  const [items, setItems] = useState(new Array(3).fill("amine mani -"));

  useEffect(() => {
    if (!scrollerInnerRef.current || hasDuplicated.current) return;
    setItems((prev) => [...prev, ...prev]);

    hasDuplicated.current = true;
  }, []);

  const renderedItems = useMemo(() => {
    return items.map((item, index) => <li key={index}>{item}</li>);
  }, [items]);

  const btnRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const btn = document.querySelector(".cta .circle-btn");
    if (btn) btnRef.current = btn;

    const handleScroll = () => {
      if (!btnRef.current) return;

      setLastScrollY((prevScrollY) => {
        const currentScrollY = window.scrollY;

        btnRef.current.style.translate =
          currentScrollY > prevScrollY
            ? `${-currentScrollY / 25}px`
            : `${currentScrollY / 40}px`;

        return currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <>
      <div className="intro__wrapper  overlap__wrapper text-capitalize fw-bold text-white_secondary">
     
        <div
          className="intro__wrapper__profession px-3 px-sm-5 px-md-0 
        d-flex justify-content-between align-self-center "
        >
          <div className="intro__wrapper__profession__start order-2  order-md-1  px-md-3 rounded-end-pill hstack gap-3 ">
            <span
              className="intro__wrapper__profession__start-location step--1 
            d-none d-md-inline-block"
            >
              located in the algeria
            </span>

            <Ball />
          </div>

          <div className="intro__wrapper__profession__end me-sm-5 order-1 order-md-3">
            <Arrow translate={"0 -200%"} rotate={"-45deg"} />
            <span
              className="d-inline-block step-100 "
              style={{ maxWidth: "150px" }}
            >
              freelance developer
            </span>
          </div>
        </div>

        <div
          className="scroller overflow-hidden position-relative align-self-end pb-5"
          data-direction="left"
        >
          <ul
            className="scroller__inner list-unstyled d-flex fw-bold"
            ref={scrollerInnerRef}
          >
            {renderedItems}
          </ul>
        </div>

      </div>

      <Desc />

      <div className="w-50 mx-auto my-5 ">
        <Btn text={"About me"} to={"about"} backgroundColor="#1c1d20" />
      </div>

      <CallToAction />
    </>
  );
}






function Desc(){
  return (
    <>
    <div className="  row justify-content-sm-between py-2 px-3 px-sm-5 gap-5  text-dart_primary mt-5">
        <div className="col-12 col-sm-6 step-0 ">
          {/* <span>
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </span> */}
          <span>
          Crafting unique digital experiences that make an impact. Together, we'll redefine online presence with innovation and precision—no fluff, just results.
          </span>
        </div>

        <div className="col-12 col-sm-4 step--1 ">
          {/* <span>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </span> */}
          <span>
          My passion for frontend development, clean code, and smooth interactions allows me to create engaging and impactful web experiences.
          </span>
        </div>
      </div>
    </>
  )
}




