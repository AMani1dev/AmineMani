import AanstekelijkCard from "../pages/Work/images/Aanstekelijk__card.bmp"
import AanstekelijkPage from "../pages/Project/images/Aanstekelijk__page.jpg"

import GraphicGoalsCard from "../pages/Work/images/twice__card.jpg"
import GraphicGoalsPage from "../pages/Work/images/twice__card.jpg"



const projects = [
    {
        
        general : {
            slug: "aanstekelijk",
            title: "Aanstekelijk",
            
            role: "Development",
            year: "2025",
            alt: "Aanstekelijk",
            to : "https://amani1dev.github.io/Aanstekelijk/"
        },
        
        card : {
            img: AanstekelijkCard,
        },
        page : {
            
            credits : "amine mani" ,
            location  :"The Netherlands ©2023" ,
            img : AanstekelijkPage,
            description: "A fitness web app to manage gym memberships.",
        }

    },
    {
        
        general : {
            slug: "twice",
            title: "twice",

            role: "Development",
            year: "2025",
            alt: "E-Commerce Image",
            to : "#" ,
        },

        card : {
            img: GraphicGoalsCard,
        } ,

        page : {
            description: "A shopping platform for modern businesses.",
            
            credits : "Branding: Ché Heijnen" ,
            location  :"The Netherlands ©2023" ,
            img : GraphicGoalsPage ,
        }

    },
];


export default projects