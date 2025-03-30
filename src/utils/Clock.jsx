import { useState, useEffect } from "react";

export default function Clock(){
    const getCurrentTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
    
        minutes = minutes < 10 ? `0${minutes}` : minutes;
    
        return { hours, minutes, ampm };
      };
    
      const [time, setTime] = useState(getCurrentTime());
    
      useEffect(() => {
        const interval = setInterval(() => {
          return setTime(getCurrentTime())
        }, 60000); 
    
        return () => clearInterval(interval); 
      }, []);
    
      return (
        <span>
          {time.hours}:{time.minutes} {time.ampm}
        </span>
      );
}
