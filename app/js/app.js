function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


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