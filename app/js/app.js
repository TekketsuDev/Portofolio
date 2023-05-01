var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("site-header").style.top = "0";
  } else {
    document.getElementById("site-header").style.top = "-86px";
  }
  prevScrollpos = currentScrollPos;
}


const handleMenu = (menu) => {
  if(menu.classList.contains('open')){
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('hamburger-icon').classList.remove('open');
    
  }
  else{
  menu.classList.toggle('open');
  document.getElementById('hamburger-icon').classList.add('open')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  }

};
  



window.addEventListener("resize", function(event) {
  let menu = document.getElementById("hamburger-icon")
  if(window.innerWidth > 750 && menu.classList.contains('open')){
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    document.getElementById('hamburger-icon').classList.remove('open');
  }
});

 
let options = {
  startAngle: -1.55,
  size: 100,
  value: 0.95,
  fill: {gradient: ['#AA7051', '#CA8560']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".js .bar").circleProgress({
  value: 0.90
});
$(".python .bar").circleProgress({
  value: 0.50
});
$(".ux .bar").circleProgress({
  value: 0.20
});


/* 
  TECK STACK

  CODE EDITOR

*/
const primaryMenu = document.getElementById("accordion-folders");
const secondaryMenu = document.getElementById("code-folders");
const fileLanguages = ["html", "css", "figma", "python", "javascript"];
// Add click event listeners to primary menu links
const links = primaryMenu.querySelectorAll("li");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    
    const selectedOption = link.dataset.value;
    
    // Remove active class from all links in the primary menu
    links.forEach(link => link.classList.remove("active"));
    
    // Add active class to the selected link in the primary menu
    link.classList.add("active");
    
    // Clear existing options in the secondary menu
    for (var i = 0; i < fileLanguages.length; i++) {
      if (selectedOption == fileLanguages[i] ) {
        fruits[i].style.display = "block";
      } else {
        fruits[i].style.display = "none";
      }
    }
    // Add options based on the selected option in the primary menu
    if (selectedOption === "language1") {
    } else if (selectedOption === "language2") {
      console.log('holiwis');
    } else if (selectedOption === "language3") {
      
    } else if (selectedOption === "language4") {
     
    } else if (selectedOption === "language5") {
      
}
  });
});

// Add active class to the first link in the primary menu on page load
links[0].classList.add("active");

// Trigger click event on the first link to populate the secondary menu
links[0].click();

/* 
var accordion = document.getElementById("accordion-folders");
var language = accordion.getElementsByClassName("language"); 
for (var i = 0; i < language.length; i++) {
   
    ACCORDION MENU
  
  language[i].addEventListener("click", function() {
  var current = accordion.getElementsByClassName("active");
  var data 
  
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
  }


 */