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
  ACCORDION MENU FILE SELECTOR
*/
/* document.getElementById("accordion-folders").addEventListener("click", checkLanguageInformation);

function checkLanguageInformation(){
  for(let i = 1; i < 4; i++){

    
    let currentID = "rd" + i;
    
  
    if(document.getElementById(currentID).checked == true){
      console.log(currentID);
      let element = document.getElementById("buenas")
      element.classList.add("active");
    }
   
  
  } 
}
*/
 

var accordion = document.getElementById("accordion-folders");
var language = accordion.getElementsByClassName("language"); 
for (var i = 0; i < language.length; i++) {
  language[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  console.log(this.className);
  });
}

var current = document.getElementById("active");
var fileSelected = current.getElementsByClassName("language-content").firstElementChild;
current.children.addEventListener("click", function(file) {

});



/* window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}); */



/* 
  **

  CODE SKILLS 

  **
*/

/* 
let code = [
  "import React from 'react';",
  "import ReactDOM from 'react-dom';",
  " ",
  "class App extends React.Component {",
  "  render() {",
  "    return(",
  "      <div>",
  "        Hello, World!|",
  "      </div>",
  "    )",
  "  }",
  "}",
];
let codeArea = document.getElementById('code');
let lineNumberArea = document.getElementById('line-number');
let ul, li, p;
ul = document.createElement('ul')
code.map(line => {  
  li = document.createElement('li')
  p = document.createElement('p')
  p.innerText = line
  p.className = 'preserve-whitespace'
  if (line.indexOf('|') > -1) {
    p.innerHTML = line.split('|').join('<span class="cursor">|</span>')
  }
  li.appendChild(p)
  ul.appendChild(li)
})
codeArea.appendChild(ul)
ul = document.createElement('ul')
for (let i=0; i<code.length + 1; i++){
  li = document.createElement('li')
  li.innerText = `${i+1}`
  ul.appendChild(li)
}
lineNumberArea.appendChild(ul)
 */

/* 

  CARD EFFECT

*/

