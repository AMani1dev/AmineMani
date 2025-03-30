import { useEffect, useRef } from "react";
import "./index.css";

export default function Start() {
    let startRef = useRef(null);
    let startWrapperRef = useRef(null)

    const words = ["hello", "bonjour", "hi", "hola", "ciao", "hallo", "salut", "namaste", "konnichiwa", "ola"];

    let index = 0;

    useEffect(() => {
        if (startRef.current) {
            const interval = setInterval(() => {
                index = (index + 1) ; 
                startRef.current.textContent = words[index];
            }, 200);

            setTimeout(() => {
                if(startWrapperRef.current){
                    startWrapperRef.current.style.translate = "0 -100%"
                }
            }, 3000)

            return () => clearInterval(interval); 
        }
    }, []);

    

    return (
        <div ref = {startWrapperRef}
        className="start___wrapper position-fixed start-0 top-0 end-0 bottom-0 user-select-none pe-none">
            <span className="text-white position-relative step-300" ref={startRef}>
                hello
            </span>
        </div>
    );
}
