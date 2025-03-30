import "./index.css"

const CircleWrapper = () => {
    const verticalAngles = [0, 50, 100, 120];
    
    return (
      <section className="circle-wrapper">
        
        <div className="circle circles-container position-relative overflow-hidden">
          <div className="circle circle-md top-circle-md"></div>
          <div className="circle circle-center"></div>
          <div className="circle circle-md bottom-circle-md"></div>
  
          {verticalAngles.map((angle, index) => (
            <div key={index} className="vertical" style={{ "--_rotate-y": `${angle}deg` }}></div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CircleWrapper;
  