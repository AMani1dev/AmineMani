import {Link} from "react-router-dom"
 


export default function Btn({ text, to, backgroundColor = "#455ce9" }) {


  let btnStyles = {
    backgroundColor ,
  }

  return (
    <Link to={to} className={`circle-btn ms-auto rounded-circle magnetic  page-link`} 
    style={btnStyles} 
    >
      {text}
    </Link>
  );
}
