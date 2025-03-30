import "./index.css"
import { Link } from "react-router-dom";

import projects from "../../data/projects"

import CallToAction from "../../components/static/Footer/CallToAction"

export default function Work() {

 
  return (
    <>
      <div className="container w-75 mx-auto ">
        <h1 className="headline-fit">Creating next level digital products</h1>
      </div>

        
      <div className="container mx-auto my-5 px-3 px-sm-0">

      <ul className="list-unstyled row gap-5 gap-sm-0 justify-content-sm-between">

        {
            projects.map((e, i) => <Project project = {e} key={i}/>)
        }
        </ul>

      </div>



      <CallToAction />
    </>
  );
}





function Project ({project}){
    return (
        
        <li className="col col-12 col-sm-5 mt-5">

        <Link to={`/work/${project?.general?.slug}`} className="page-link"> 

            <div className="card border-0 text-dark rounded-0 ">
                
                <img 
                src= {project?.card?.img} alt={project?.general?.alt}
                className="card-img-top rounded-0" />
                
                <div className="card-body">

                    <span className="card-title step-100 text-capitalize mt-3 mb-1 d-inline-block">
                      {project?.general?.title}
                    </span>
                    
                    <hr className="my-3" />

                    <div className="hstack flex-wrap justify-content-between step--1">
                        <span>{project?.general?.role}</span>
                        <span>{project?.general?.year}</span>
                    </div>

                </div>

            </div>
            
        </Link>


      </li>
    )
}


