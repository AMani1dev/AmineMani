import { useRef } from "react";
import Btn from "../../ui/Btn";

import Lbtn from "../../ui/Overlap-btn-hr";

// import profileImg from "./images/intro-img.jpg";
import profileImg from "./images/profile.jpg";

import Arrow from "../../../utils/Arrow"


export default function CallToAction() {


  const shapeRef = useRef(null);

  const handleScroll = () => {
    let value = 1 + (window.scrollY / -1000 );
    if (shapeRef.current) {
      shapeRef.current.style.scale = `1 ${value < 0 ? 0 : value }`;
    }
  };

  window.addEventListener("scroll", () => handleScroll());

  return (
    <>
      <div className="shape position-relative">
        <div className="shape__wrapper position-absolute w-100 bg-white" ref={shapeRef}></div>
      </div>

      <div className="cta py-5 text-white_secondary">
        <div className="d-flex justify-content-between px-5 ">
          <div className="display-3">
            <span className="">
              <img
                className="icon_img rounded-circle me-3"
                alt="img"
                src={profileImg}
                style={{filter : "blur(1px)"}}
                width={"40px"}
              />
              let's work
            </span>

            <p> together</p>
          </div>

          <Arrow translate={"0 0%"} rotate={"45deg"}/>

        </div>

        <div className="px-4">
          <Lbtn>
            <Btn text={"Get it touch"} to={"/contact"} isViolet={true} />
          </Lbtn>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-2  px-4">
          <a
            href=""
            className="btn btn-outline-secondary rounded-pill magnetic px-3 py-2"
          >
            AM.freelance@gmail.com
          </a>
          <a
            href=""
            className="btn btn-outline-secondary rounded-pill magnetic px-3 py-2"
          >
            +213 796594817
          </a>
        </div>
      </div>
    </>
  );
}