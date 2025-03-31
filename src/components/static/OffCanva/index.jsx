// import { NavLink , Link} from "react-router-dom";

// import "./index.css"
// export default function OffCanva() {

//   return (
//     <>

//       <aside className="d-flex flex-column position-fixed border border-danger">
//         <span className="text-secondary text-uppercase  d-block  mb-3 navigation-span">
//           navigation
//         </span>

//         <ul className="mt-3 text-capitalize list-unstyled menu-list fancy-hover">
//           <li className="magnetic position-relative">

//             <NavLink to={"/"}> home</NavLink>
//           </li>

//           <li className="magnetic position-relative">
//             <NavLink to={"work"}> work</NavLink>
//           </li>

//           <li className="magnetic position-relative">
//             <NavLink to={"about"}> about</NavLink>
//           </li>

//           <li className="magnetic position-relative">
//             <NavLink to={"contact"}> contact</NavLink>
//           </li>
//         </ul>

//         <div>
//             <span className="text-grey_secondary">socials</span>

//             <ul className="list-unstyled hstack gap-2">
//               <li>
//                 <Link>instagram</Link>
//               </li>
//               <li>
//                 <Link>twitter</Link>
//               </li>
//               <li>
//                 <Link>linkedin</Link>
//               </li>
//             </ul>
//           </div>
//       </aside>
//     </>
//   );
// }
























import { NavLink, Link } from "react-router-dom";

import "./index.css";
export default function OffCanva() {
  return (
    <>
       <Aside/>
    </>
  );
}

function Aside() {
  return (
    <>
      <aside className="d-flex flex-column position-fixed">
        <OffCanvaPageLinks />
        <Socials />
      </aside>
    </>
  );
}

function OffCanvaPageLinks() {
  return (
    <>
      <span className="text-secondary text-uppercase  d-block  mt-5 mb-3 step--3">
        navigation
      </span>

      <ul className="mt-3 text-capitalize list-unstyled menu-list ">
        <li className="magnetic position-relative">
          {/* <NavLink className={"page-link"} to={"/"}> */}
          <NavLink className={"page-link"} to={"/"}>
            {" "}
            home
          </NavLink>
        </li>

        <li className="magnetic position-relative">
          <NavLink className={"page-link"} to={"work"}>
            {" "}
            work
          </NavLink>
        </li>

        <li className="magnetic position-relative">
          <NavLink className={"page-link"} to={"about"}>
            {" "}
            about
          </NavLink>
        </li>

        <li className="magnetic position-relative">
          <NavLink className={"page-link"} to={"contact"}>
            {" "}
            contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}

function Socials() {
  return (
    <>
      <div>
        <span className="text-grey_secondary">socials</span>

        <ul className="list-unstyled d-flex flex-wrap gap-4 socials mb-5">
          <li className="position-relative">
            <Link>instagram</Link>
          </li>
          <li className="position-relative">
            <Link>twitter</Link>
          </li>
          <li className="position-relative">
            <Link>linkedin</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
