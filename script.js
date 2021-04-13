const heads = document.querySelectorAll(".head");


console.log(heads);

window.addEventListener("scroll", checkHeads);

function checkHeads() {
  const triggerBottom = window.innerHeight / 5 * 4;
  

  heads.forEach(head => {
      const headTop = head.getBoundingClientRect().top;

      if(headTop < triggerBottom) {
        head.classList.add("show");
        
      } else {
        head.classList.remove("show");
        
      }
  });
}