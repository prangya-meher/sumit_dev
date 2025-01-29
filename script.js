var openMenu = document.querySelector(".open-bar"); 
var closeMenu = document.querySelector(".close-bar");
let gitHub=document.querySelector(".github");
let linkedIn=document.querySelector(".linkedin");
let contactButton=document.querySelector(".contact");
let downloadButton=document.querySelector(".download");
// let blackBox=document.querySelector(".black_box");
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

const blackBoxAnimation= () =>{
  let tl2=gsap.timeline();
  tl2.from(".black_box h1",{
    x:200,
    opacity:0,
    delay:1,
    duration:1.3,
    stagger:0.7
  })

  tl2.to(".black_box h1",{
    x:-100,
    opacity:0,
    duration:0.8,
    stagger:0.2
  })
  tl2.to(".black_box",{
    opacity:0,
    duration:1.5
  })
  tl2.to(".black_box",{
    display:"none"
  })

}




toggleMenu();
toggleGit();
blackBoxAnimation();
