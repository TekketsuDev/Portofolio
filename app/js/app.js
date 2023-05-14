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
const secondaryMenu = document.getElementById("code-folders").children;
const clickLabel = document.querySelectorAll('.language-label');

const filesMenu = document.querySelectorAll(".language-content");

 
// loop through the labels and add a click event listener to each one
clickLabel.forEach((label, index) => {
  label.addEventListener('click', e => {
    // remove the "active" class from all li elements with class name of "language"
    document.querySelectorAll('.language').forEach(li => {
      li.classList.remove('active');
    });
    document.querySelectorAll(".file").forEach(el => {
      el.classList.remove('selected')
    });
 
    
    // add the "active" class to the parent li element of the clicked label
    label.parentNode.classList.add('active');

    
      let allSibling = label.nextElementSibling.querySelectorAll("div")
      allSibling.forEach(file =>{
        file.addEventListener('click', c =>{
          
          if(label.parentNode.classList.contains('active')){
            document.querySelectorAll(".file").forEach(el => {
              el.classList.remove('selected')
            });
            file.classList.add('selected');
         
          }
          countLines();
        });
      })
  



    
    secondaryMenu.item(index).classList.add("activeFile");
    for (let i = 0; i < secondaryMenu.length; i++) {
      if(secondaryMenu.item(i) != secondaryMenu.item(index) ){
        
        secondaryMenu.item(i).classList.remove("activeFile");
      }
    }
  });
});

clickLabel[0].click();


const textarea = document.querySelector('textarea')
const lineNumbers = document.querySelector('.line-numbers')

textarea.addEventListener('keyup', event => {
  const numberOfLines = event.target.value.split('\n').length

  lineNumbers.innerHTML = Array(numberOfLines)
    .fill('<span></span>')
    .join('')
})
function countLines() {
 /*  var el = document.getElementById('htmlReadme');
  var divHeight = el.offsetHeight
  var lineHeight = 1.15;
  var lines = divHeight / lineHeight;
  console.log("Lines: " + lines); */
  const textLines = document.getElementById("htmlReadme").innerText;
      const numLines = textLines.split("").length;
      document.getElementById("line-numbers").innerText=numLines-1;
}

/* console.log(clickLabel); */
/* addGlobalEventListener('click', "label.language-label", e => {
 
}) */

/* const primaryMenu = document.getElementById("accordion-folders");
const secondaryMenu = document.getElementById("code-folders").children;
const languages = primaryMenu.querySelectorAll("li");

 
const allfiles = document.querySelectorAll("div.language-content");
languages.forEach((language, index) => {

  let currentLabel = language.querySelectorAll(".language-label");
  console.log(language);
  language.addEventListener("click", function(event) {
    event.preventDefault();


    languages.forEach(language => language.classList.remove("active"));
   

    language.classList.add("active");


    secondaryMenu.item(index).classList.add("activeFile");
    


    // CHANGE ACTIVE SECONDARY MENU
    for (let i = 0; i < secondaryMenu.length; i++) {
      if(secondaryMenu.item(i) != secondaryMenu.item(index) ){
        
        secondaryMenu.item(i).classList.remove("activeFile");
      }
    }
    

  });
});

// Add active class to the first language in the primary menu on page load
languages[0].classList.add("active");

// Trigger click event on the first language to populate the secondary menu
languages[0].click(); */

/* console.log(allfiles);

allfiles.forEach((file, indexfile) => {
    if(file.parentElement.classList.contains("active")){
    file.addEventListener("click", (event) =>{
      let target = event.target;
      console.log(event.target);
    });
  }

    
}); 


  




// Trigger click event on the first language to populate the secondary menu
allfiles[0].click(); */


