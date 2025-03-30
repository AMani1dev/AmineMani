import { Link } from "react-router-dom";

import Clock from "../../../utils/Clock"


export default function Footer() {

  return (
    <>
      <footer>
        <div className="px-1 px-sm-3 ps-md-5 pb-3  row text-white_secondary  ">

          
        <div className=" col-12 order-md-2 col-md-5  ms-md-auto px-3 px-md-4">

            <span className="text-grey_secondary ">socials</span>

            <ul className="list-unstyled  d-flex flex-wrap gap-3 mt-2">
              <li className="magnetic ">
                <Link className="pe-none user-select-none">instagram</Link>
              </li>
              <li className="magnetic ">
                <Link className="pe-none user-select-none">twitter</Link>
              </li>
              <li className="magnetic ">
                <Link className="pe-none user-select-none">linkedin</Link>
              </li>
            </ul>
          </div>


          <hr className="my-4 d-md-none"/>

          <div className=" col-12 col-md-5  order-md-1 px-3 d-flex  justify-content-between gap-2 gap-sm-4 ">
            <div className="vstack">
              <span className="text-grey_secondary mb-2 step--1">version</span>
              <span className=" step--3">2025 © Edition</span>
            </div>

            <div className="vstack text-center  text-md-start ">
              <span className="text-grey_secondary mb-2  step--1">local time</span>
              <span className=" step--3">
                <Clock />  GMT+1
              </span>

            </div>
          </div>


        </div>


      </footer>
    </>
  );
}