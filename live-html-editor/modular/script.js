
    const jsToggle = document.querySelector(".js-toggle");
    const cssToggle = document.querySelector(".css-toggle");
    const runBtn = document.querySelector(".execute-btn");
    const clrBtn = document.querySelector(".clr-btn");
    const backBtn = document.querySelector(".back-btn");
    const executedFrame = document.getElementById("executed");

    const htmlEditor = document.getElementById("html-editor");
    const jsEditor = document.getElementById("js-editor");
    const cssEditor = document.getElementById("css-editor");
  

    jsToggle.addEventListener("click", () => {
      jsEditor.style.display = jsEditor.style.display === "block" ? "none" : "block";
    });

    cssToggle.addEventListener("click", () => {
      cssEditor.style.display = cssEditor.style.display === "block" ? "none" : "block";
    });

runBtn.addEventListener("click", () => {
  const htmlContent = htmlEditor.innerText.trim();
  const cssContent = cssEditor.innerText.trim();
  const jsContent = jsEditor.innerText.trim();





    let finalCode;
    const isFullHTML = htmlContent.toLowerCase().includes("<!doctype") || htmlContent.toLowerCase().includes("<html");

    if (isFullHTML) {
      finalCode = htmlContent;
    } else {
      finalCode = `
        ${htmlContent}
        <style>${cssContent}</style>
        <script>${jsContent}<\/script>
      `;
    }

    executedFrame.srcdoc = finalCode;
  
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


const filePicker = document.getElementById("filePicker");
const toolbarMenu = document.getElementById('toolbarMenu');



toolbarMenu.addEventListener('change', (e) => {
  const action = e.target.value;

  if (action === 'external') {
    filePicker.click(); // hidden file input
  }  else if (action === 'download') {
    downloadAsHTML(); 
  }

else if (action === 'hideTB') {
  const isVisibleJS = getComputedStyle(jsToggle).display !== "none";
   const isVisibleCSS = getComputedStyle(cssToggle).display !== "none";

  jsToggle.style.display = isVisibleJS ? "none" : "block";
  cssToggle.style.display = isVisibleCSS ? "none" : "block";
}




  toolbarMenu.value = '';
});

    filePicker.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    htmlEditor.innerText = event.target.result;
  };
  reader.readAsText(file);
});


  