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
  
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});



/* 
  **

  CODE SKILLS 

  **
*/


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
  console.log(li)
  ul.appendChild(li)
}
lineNumberArea.appendChild(ul)
