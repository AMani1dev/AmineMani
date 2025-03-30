import "./index.css";
import img from "./images/profile.jpg";

import Lbtn from "../../components/ui/Overlap-btn-hr";
import CallToAction from "../../components/static/Footer/CallToAction";
import Ball from "../../components/ui/Ball";

import DotsWrapper from "../../utils/DotsWrapper"


export default function About() {

  return (
    <>
      <div className="container  mx-auto  px-3 text_wrapper">
        {/* <h1 className="ms-sm-5 headline-fit">Helping brands thrive in the digital world</h1> */}
        <h1 className="ms-sm-5 headline-fit">Helping others thrive in the digital world</h1>

        <Lbtn>
          <div className="circle-btn rounded-circle ms-auto me-5">
            <Ball />
          </div>
        </Lbtn>

        <div className="row p-2 gap-5 gap-md-0 mt-5">
          <div className="col-12 col-md-4">
            {/* <span className="step--1">
              I help companies from all over the world with tailor-made
              solutions. With each project, I push my work to new horizons,
              always putting quality first.
            </span> */}
            <span className="step--1">
            I craft portfolios, landing pages, and small web apps tailored to each client's needs—blending design, code, and seamless interactions to deliver high-quality results.
            </span>

            <span className="text-secondary d-flex gap-2 mt-4">
              Always exploring
              <DotsWrapper bg = "bg-secondary" pb ="pb-1" />
            </span>
          </div>
          <div className=" col-12 col-md-7 ms-md-auto">
            <img src={img} alt="img" className="w-100" />
          </div>
        </div>
      </div>


      <Sp/>


      <CallToAction />
    </>
  );
}

















// function Sp(){
//   return (

//     <div className="container my-5 pb-5 px-3 mx-auto justify-content-md-center ">
//     <h2 className="d-flex gap-2 ">
//       i can help you with
//       <DotsWrapper />
//     </h2>

//     <div className="row gap-5 gap-md-0 fw-bold  hp">

//       <div className="col col-12 col-md-4 pt-1 ps-md-3 pe-md-1 position-relative ">

          
//         <hr className="" />

//         <h3 className="mb-3 my-4">Design</h3>
//         <p className="step--3 fw-lighter">
//           With a solid track record in designing websites, I deliver strong
//           and user-friendly digital designs. (Since 2024 only in combination
//           with development)
//         </p>
//       </div>

//       <div className="col col-12 col-md-4 pt-1 ps-md-3 pe-md-1 position-relative ">
//         <hr className="" />

//         <h3 className="mb-3 my-4">development</h3>
//         <p className="step--3 fw-lighter">
//           I build scalable websites from scratch that fit seamlessly with
//           design. My focus is on micro animations, transitions and
//           interaction. Building with Webflow (or Kirby CMS).
//         </p>
//       </div>

//       <div className="col col-12 col-md-4 pt-1 ps-md-3 pe-md-1 position-relative ">
//         <hr className="" />

//         <h3 className="mb-3 my-4">full package</h3>
//         <p className="step--3 fw-lighter">
//           A complete website from concept to implementation, that's what
//           makes me stand out. My great sense for design and my development
//           skills enable me to create kick-ass projects.
//         </p>
//       </div>
      
//     </div>
//   </div>

//   )
// }





function Sp(){
  return (

    <div className="container my-5 pb-5 px-3 mx-auto justify-content-md-center ">
    <h2 className="d-flex gap-2 ">
      i can help you with
      <DotsWrapper />
    </h2>

    <div className="row gap-5 gap-md-0 fw-bold  hp">

      <div className="col col-11 col-md-6  mx-auto pt-1  position-relative ">
        <hr className="" />

        <h3 className="mb-3 my-4  text-center">development</h3>
        <p className="step--3 fw-lighter text-center  mx-auto">
          I build scalable websites from scratch that fit seamlessly with
          design. My focus is on micro animations, transitions and
          interaction. Building with react js 
          <br />
          (and react router).
        </p>
      </div>
    </div>


    
  </div>

  )
}