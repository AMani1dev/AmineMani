import { Link, NavLink } from "react-router-dom";

import "../../../assets/css/global.css";
import "./index.css"


let headerLinks = [
  {
    to : "/work" ,
    text : "work"
  },
  {
    to : "/about" ,
    text : "about"
  },
  {
    to : "/contact" ,
    text : "contact"
  }
]
export default function Heading ({clr}){

  let checkLinkClr =  clr ? "header-link_dark" : "header-link_light"
    return (
        <>
        <header className = "text-capitalize position-fixed start-0 top-0 end-0 ">

            <nav className="my-2 p-4 hstack  justify-content-between">

                    <Link to={"/"} 
                    className = {`hstack magnetic  name__wrapper  page-link
                       ${clr === true ? "text-black" : "text-white_secondary"} `} >

                        <span className="credit d-inline-block me-1"> © </span>

                        <span className="name d-inline-block overflow-hidden">
                           <span className="d-inline-block ">
                             code by amine mani
                           </span>
                        </span>
                

                    </Link>

                <ul className="list-unstyled d-none d-sm-flex gap-4">
                  {
                    headerLinks.map(link => 
                    <HeaderLink link={link} key={link.text} checkLinkClr = {checkLinkClr} />)
                  }

                </ul>

            </nav>

        </header>
        </>
    )
}








function HeaderLink({link, checkLinkClr}){

  return (
    <>
    <li className="magnetic">
      <NavLink to={link.to}  className={`page-link ${checkLinkClr}`}>
        {link.text}
      </NavLink>
    </li>
    </>
  )
}
