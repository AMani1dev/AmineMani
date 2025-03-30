function scroll(){
    document.addEventListener("wheel", function (event) {
        event.preventDefault(); 
        window.scrollBy({
          top: event.deltaY * 9,
          behavior: "smooth"
        });
      }, { passive: false });
}
scroll()