var topnav , logo , menuIcon , navOption;

topnav = document.getElementById('top-nav');
logo = document.getElementById('logo');
menuIcon = document.getElementById("menu-icon");
navOption = document.getElementById("nav-option");

function topnavScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        topnav.style.padding = "3rem 1rem";
        logo.style.fontSize = "2.5rem";
   }
   else {
    logo.style.fontSize = "3rem";
   }
}
// event lisener to the window
window.addEventListener("scroll" , ()=>{
    topnavScroll();
});
// for menu on small screen

menuIcon.addEventListener("click" , ()=>{
  if (navOption.style.display.match("block")) { 
     navOption.style.display = "none";
     document.getElementById("menu-bars").classList.remove('change');
    } else {
        navOption.style.display = "block";
        document.getElementById("menu-bars").classList.add('change');
    }
});