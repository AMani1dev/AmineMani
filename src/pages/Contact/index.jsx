import "./index.css";
import { Link } from "react-router-dom";

import ContactForm from "../../components/form";
import Arrow from "../../utils/Arrow"


export default function Contact() {

  return (
    <>
      <div className=" row px-2 bg-dark_primary wrapper">

        <Details />

        <div className="col-12 col-md-6 order-md-1 ms-md-5 ps-4 ms-md-0  text-capitalize text-white_secondary">
          <ContactForm />
        </div>

      </div>
    </>
  );
}

function Details() {
  return (
    <>
      <div className="col-12 col-md-4 order-md-2 ms-md-auto ps-5  ps-md-0 mb-5 mb-md-0">

        <Arrow translate="0 -100%" rotate="-45deg"/>

        <div className="vstack gap-1">
          <span className="text-secondary text-uppercase step--3 d-block mb-2">contact details</span>


          
          <a href="mailto:aminemani.freelance@gmail.com">AM.freelance@gmail.com</a>
          <a href="tel:+213796594817">+213 796594817</a>

        </div>

        <div className="vstack gap-1 my-5">
          <span className="text-secondary text-uppercase step--3 d-block mb-2">business details</span>

          <span href="" className="text-white_secondary ">Dennis Snellenberg B.V.</span>

          <a href="" className="pe-none user-select-none">location : algeria</a>
        </div>

        <div>
          <span className="text-secondary text-uppercase step--3 d-block mb-2">socials</span>

          <ul className="list-unstyled vstack gap-2">
            <li>
              <Link>instagram</Link>
            </li>
            <li>
              <Link className="pe-none user-select-none">twitter</Link>
            </li>
            <li>
              <Link className="pe-none user-select-none">linkedin</Link>
            </li>
          </ul>
        </div>


      </div>
    </>
  );
}

