var openMenu = document.querySelector(".open-bar"); 
var closeMenu = document.querySelector(".close-bar");
let gitHub=document.querySelector(".github");
let linkedIn=document.querySelector(".linkedin");
let contactButton=document.querySelector(".contact");
let downloadButton=document.querySelector(".download");

const toggleMenu = () => {
  var tl1 = gsap.timeline();
  tl1.to(".slider", { // Remove extra space in the selector
    top: 0, 
    duration: 1.3
  });
  
  tl1.from(closeMenu,{
    top:-10,
    opacity:0,
    duration:0.8
  })
  tl1.from(".slider  li",{
    x:100,
    opacity:0,
    duration:0.7,
    stagger:0.5
  })
  tl1.pause();
  
  openMenu.addEventListener("click", () => {
    tl1.play();
  });
  closeMenu.addEventListener("click", () =>{
    tl1.reverse();
  })
}

const toggleGit = () => {
  gitHub.addEventListener("click",()=>{

  })

  linkedIn.addEventListener("click",()=>{

  })

  contactButton.addEventListener("click",()=>{

  })

  downloadButton.addEventListener("click",()=>{
    
  })
}



toggleMenu();
toggleGit();
