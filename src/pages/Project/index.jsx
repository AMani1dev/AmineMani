import "./index.css"
import { useParams } from "react-router-dom";


import projects from "../../data/projects";
import Btn from "../../components/ui/Btn";

import CallToAction from "../../components/static/Footer/CallToAction"
// https://amani1dev.github.io/Aanstekelijk/
function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find((p) => p?.general?.slug === slug);

    console.log(project)

    if (!project) return <h1>Project Not Found</h1>;


    return (
        <>
        <div className="w-75 mx-auto project">
            
            <h1>{project?.general?.title}</h1>

            <div className="row gap-5 mt-5">

                <div className="col col-md-3 vstack gap-3">

                    <span className="text-grey_secondary ">Role / Services</span>
                    <hr />
                    <span>{project?.general?.role}</span>

                </div>

                <div className="col col-md-3 vstack gap-3">
               
                    <span className="text-grey_secondary ">credits</span>
                    <hr />
                    <span>{project?.page?.credits}</span>

                </div>

                <div className="col col-md-3 vstack gap-3">
         
                    <span className="text-grey_secondary ">location & year</span>
                    <hr />
                    <span>{project?.page?.location}</span>

                    <Btn text = 'live site' to ={project.general.to || "/"} />
                
                </div>

            </div>
        </div>

        <div className="container mx-auto my-5">

            <img src={project?.page?.img} alt="img" className="d-block mx-auto"/>
        
        </div>

        <CallToAction />
        </>
    );
}

export default ProjectPage;
