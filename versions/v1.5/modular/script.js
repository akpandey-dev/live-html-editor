// Important Variable declarations
    const jsToggle = document.querySelector(".js-toggle");
    const cssToggle = document.querySelector(".css-toggle");
    const runBtn = document.querySelector(".execute-btn");
    const clrBtn = document.querySelector(".clr-btn");
    const backBtn = document.querySelector(".back-btn");
    const executedFrame = document.getElementById("executed");

    const htmlEditor = document.getElementById("html-editor");
    const jsEditor = document.getElementById("js-editor");
    const cssEditor = document.getElementById("css-editor");
  
// JS Toggle and CSS Toggle button handlers

    jsToggle.addEventListener("click", () => {
      jsEditor.style.display = jsEditor.style.display === "block" ? "none" : "block";
    });

    cssToggle.addEventListener("click", () => {
      cssEditor.style.display = cssEditor.style.display === "block" ? "none" : "block";
    });

// The Secret and hidden Easter Egg
function executeEasterEgg() {
      executedFrame.srcdoc = `
      <style>
        body {
          background:black;
          color:#0f0;
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
          font-family:monospace;
          font-size:22px;
          text-align:center;
        }
        .glitch { animation: blink 0.25s infinite alternate; }
        @keyframes blink { from { color:#0f0; } to { color:red; } }
      </style>
      <div class="glitch">
        ⚠️ SYSTEM OVERRIDE ⚠️ <br>
        Unexpected Execution Triggered... <br>
        Stark Protocol Activated!
      </div>
      <script>
        setTimeout(()=>{
          document.body.innerHTML = "<h1 style='color:cyan;'>Surprise! 🫡<br>Back to your editor...</h1>";
        },4000);
      <\/script>
    `;

};
// If not code is written at all
function executeNoCode(){
    executedFrame.srcdoc = "<h2 style='color:red; text-align:center; margin-top:20px;'>⚠️ Nothing to execute! Please write some code first. ⚠️</h2>";
    return;
}
// If HTML, JS and CSS are written in same editor textboxes
function executeFullCode(htmlContent){
    let finalCode = htmlContent;
    executedFrame.srcdoc = finalCode;
}
// If HTML, JS and CSS are written in separate editor textboxes
function executeModularCode(htmlContent, cssContent, jsContent){
      let finalCode = `
        ${htmlContent}
        <style>${cssContent}</style>
        <script>${jsContent}<\/script>
      `;
      executedFrame.srcdoc = finalCode;
}



// The single Function That handles execution protocol
function executeCode() {

  const htmlContent = htmlEditor.innerText.trim();
  const cssContent = cssEditor.innerText.trim();
  const jsContent = jsEditor.innerText.trim();

  let surprise = "ANY ERRORS OR BUGS LEFT AREN'T THE RESPONSIBILITY OF THE PUBLISHER ;";
  let toLowSup = surprise.toLowerCase() ;

  // easter egg: credits mode
  if (htmlContent.toLowerCase().includes(toLowSup)) {
    executeEasterEgg();
    return;
  }
  else if (htmlContent === "" && cssContent === "" && jsContent === "") {
    executeNoCode();
    return;
  }
  else if (htmlContent !== "" && cssContent == "" && jsContent == "") {
    executeFullCode(htmlContent);
    return;
  }
  else if (htmlContent !== "" && (cssContent !== "" || jsContent !== "")) {
    executeModularCode(htmlContent, cssContent, jsContent);
    return;
  }
};

    runBtn.addEventListener("click", () => {
      executeCode();
      // your existing display toggle stays same
      document.querySelector(".all").style.display = "none";
      executedFrame.style.display = "block";
      clrBtn.style.display = "none";
      runBtn.style.display = "none";
      backBtn.style.display = "inline-block";
    });

    backBtn.addEventListener("click", () => {
      document.querySelector(".all").style.display = "flex";
      executedFrame.style.display = "none";
      clrBtn.style.display = "inline-block";
      runBtn.style.display = "inline-block";
      backBtn.style.display = "none";
    });

    clrBtn.addEventListener("click", () => {
      htmlEditor.innerText = "";
      jsEditor.innerText = "";
      cssEditor.innerText = "";
      executedFrame.srcdoc = "";
      executedFrame.style.display = "none";
       jsEditor.style.display = "none";
      cssEditor.style.display = "none";
    });

    function downloadAsHTML() {
      const htmlCode = htmlEditor.innerText;
      const cssCode = `<style>${cssEditor.innerText}</style>`;
      const jsCode = `<script>${jsEditor.innerText}<\/script>`;
      const finalCode = htmlCode + cssCode + jsCode;
      const fileName = "new.html";

      const blob = new Blob([finalCode], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }



// Declare Important Variables

const filePicker = document.getElementById("filePicker");
const toolbarMenu = document.getElementById('toolbarMenu');

let valueFont = 0 ;
let wrapNo = 0 ;

//==========================================================================
function clickFilePicker(){
    filePicker.click();
}
//===========================================================================
function generateBasicHTML(){
    htmlEditor.innerText = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Document</title>
<style>
/* CSS here */
</style>
</head>
<body>

<!--body here -->

<script>
/* Write JavaScript here */
<\/script>
</body>
</html>`;
    cssEditor.innerText = '';
    jsEditor.innerText = '';
}
//=========================================================================
function hideToggleButtons(){
  const isVisibleJS = getComputedStyle(jsToggle).display !== "none";
  const isVisibleCSS = getComputedStyle(cssToggle).display !== "none";

  jsToggle.style.display = isVisibleJS ? "none" : "block";
  cssToggle.style.display = isVisibleCSS ? "none" : "block";
}
//=========================================================================
function showCredits(){
  alert("This is an HTML editor created by AKP Labs.\n\nFeel free to use and modify it as you wish!");
  htmlEditor.innerHTML = `
    <center><b>CREDITS</b></center>
    <center>Created by AKP Labs</center>
    <center>Feel free to use and modify it as you wish!</center>
    <br>
    AUTHOR: Ak <br>
    VERSION: 1.5 <br>
    DATE: 2026-01-27 <br>
    LICENSE: MIT License <br>
    CO-PARTNER(DEBUGGER):ChatGPT <br>
    LEGAL_NOTE: <b>ANY ERRORS OR BUGS LEFT AREN'T THE RESPONSIBILITY OF THE PUBLISHER ;</b>
  `;
}
//=========================================================================
function toggleThemeMode(selectEl){
  document.body.classList.toggle("nightmode");
  const option = selectEl.querySelector("option[value='darkMode']");
  option.textContent = document.body.classList.contains("nightmode")
    ? "Light Mode ☀️"
    : "Night Mode 🌙";
}
//==========================================================================
function handleFontSize(){
     if (valueFont === 0 ){
       htmlEditor.style.fontSize = "15px" ;
       valueFont++ ;
     }
   else if(valueFont === 1){
       htmlEditor.style.fontSize = "18px" ;
       valueFont++ ;
     }

      else if(valueFont === 2){
       htmlEditor.style.fontSize = "25px" ;
       valueFont++ ;
     }

      else if(valueFont === 3){
       htmlEditor.style.fontSize = "30px" ;
       valueFont++ ;
     }

      else if(valueFont === 4){
       htmlEditor.style.fontSize = "medium" ;
       valueFont = 0 ;
     }

     else {
      htmlEditor.style.fontSize = '' ;
     }
}
//============================================================================
function handleWordWrap(){
  const editors = document.querySelectorAll(".editor");

  if (wrapNo === 1) {
    editors.forEach(ed => {
      ed.style.whiteSpace = "pre-wrap";   // line breaks allowed
      ed.style.wordBreak = "break-word";  // break long words if needed
      ed.style.overflowX = "hidden";      // horizontal scroll hatao
    });
    wrapNo = 0;
  } else {
    editors.forEach(ed => {
      ed.style.whiteSpace = "pre";        // preserve line breaks, no wrapping
      ed.style.wordBreak = "normal";      // long words won't break
      ed.style.overflowX = "auto";        // horizontal scroll on
    });
    wrapNo = 1;
  }
}
//===========================================================================
function handleUnknownAction(action){
  console.log('Unknown action:', action);
}
//===========================================================================

toolbarMenu.addEventListener('change', (e) => {
  const action = e.target.value;

  if (action === 'external') {
    clickFilePicker(); // existing function
  } else if (action === 'generate') {
    generateBasicHTML(); // existing function
  } else if (action === 'download') {
    downloadAsHTML(); // existing function
  } else if (action === 'hideTB') {
    hideToggleButtons(); // existing function
  } else if (action === 'credits') {
    showCredits(); // existing function
  } else if (action === 'darkMode') {
    toggleThemeMode(toolbarMenu); // existing function
  } else if (action === 'fontPlus') {
    handleFontSize(); // existing function
  } else if (action === 'wrdWrp') {
    handleWordWrap(); // existing function
  } else {
    handleUnknownAction(action); // handle unknown actions: existing function
  }

  // reset menu back to ⋮
  toolbarMenu.value = '';
});

// File upload handler
filePicker.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    htmlEditor.innerText = event.target.result;
  };
  reader.readAsText(file);
});


// force plain text paste in all editor divs
document.querySelectorAll(".editor").forEach(editor => {
  editor.addEventListener("paste", function(e) {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(text));
});

});











