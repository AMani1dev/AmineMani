import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { useEffect} from "react";

import Heading from "../components/static/Header";
import Footer from "../components/static/Footer/index"
import OffCanva from "../components/static/OffCanva";
import Transition from "../components/static/Transition";
import Start from "../components/static/Start";


export default function RootLayout() {
  const navigate = useNavigate(); 

  useEffect(() => {
    let aside = document.querySelector("aside");
    const links = document.querySelectorAll(".page-link"); 
    const transitionWrapper = document.querySelector(".transition__wrapper");

    const handleClick = e => {
      e.preventDefault();
      transitionWrapper.classList.add("active");
      if(aside.classList.contains("aside__show"))aside.classList.remove("aside__show")


      // setTimeout(() => navigate(e.target.getAttribute("href")) , 1000); 
      setTimeout(() => {
        navigate(e.target.getAttribute("href"))
        window.scrollTo(0, 0)
      } , 1000); 

      setTimeout(() => transitionWrapper.classList.remove("active"), 2000); 
    };

    links.forEach(link => link.addEventListener("click", handleClick));

    return () => {
      links.forEach(link => link.removeEventListener("click", handleClick)); 
    };
  }, [navigate]);


  useEffect(() => {
    let navBtn = document.querySelector(".aside-btn")
    let header = document.querySelector("header")
    let aside = document.querySelector("aside");

  
    function showNavBtn(){
      navBtn.classList.add("nav-btn__shown")
      header.classList.add("opacity-0")
    }
    function hideNavBtn(){
      navBtn.classList.remove("nav-btn__shown")
      header.classList.remove("opacity-0")
    }
    window.addEventListener("scroll", () => {


      window.scrollY > 50  || aside.classList.contains("aside__show") ?
      showNavBtn() :  hideNavBtn() ;
    })
  })

  useEffect(() => {
    let magneticElements = document.querySelectorAll(".magnetic");


    magneticElements.forEach(mge => {
    
      mge.addEventListener('mousemove', e => {
      let x = (e.offsetX - mge.clientWidth / 4) / 2;  // Increased divisor to 4
      let y = (e.offsetY - mge.clientHeight / 4) / 2; // Increased divisor to 4
      mge.style.transform = `translate(${x}px, ${y}px)`;
    });
    
      mge.addEventListener('mouseleave', () => mge.style.transform = 'translate(0, 0)');
    });
    
  })
 
  function handleClick(){
    let aside = document.querySelector("aside");
        aside.classList.toggle("aside__show")
  }


  let location = useLocation()

  const isBlackLinksPage = 
  location.pathname === "/work" ||
  location.pathname === "/" ||
  location.pathname.startsWith("/work/") ||
  location.pathname === "/about";





  return (
    <>
    <Start/>
    <Transition />

      <button
        onClick={() => handleClick()}
        className="magnetic aside-btn rounded-circle overflow-hidden position-fixed border-0 bg-black "
      >
        <div className="lines-container  d-flex flex-column justify-content-center align-items-center gap-1 h-100">
          <div className="top-ln bg-white"></div>
          <div className="bottom-ln bg-white"></div>
        </div>

        <div className="floating position-absolute rounded-circle"></div>
      </button>

      <Heading clr = {isBlackLinksPage} />

      <OffCanva />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
