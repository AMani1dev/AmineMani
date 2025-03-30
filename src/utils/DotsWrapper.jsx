export default function DotsWrapper({ bg = "bg-black" , pb = "pb-2"}) {
    const dots = [0.2, 0.4, 0.6];
  
    return (
      <div className={ `dots__wrapper align-self-end ${pb} d-flex gap-1`}>
        {dots.map((delay, index) => (
          <div 
            key={index} 
            className={`dot rounded-circle ${bg}`} 
            style={{ "--delay": `${delay}s` }} 
          ></div>
        ))}
      </div>
    );
}
