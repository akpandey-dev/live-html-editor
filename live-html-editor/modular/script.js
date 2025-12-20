
    const htmlEditor = document.getElementById("htmlEditor");
  const cssEditor = document.getElementById("cssEditor");
   const jsEditor = document.getElementById("jsEditor");
    const cssBox = document.getElementById("cssBox");
    const jsBox = document.getElementById("jsBox");
const cssToggle = document.getElementById("cssToggle");
  const jsToggle = document.getElementById("jsToggle");
   const preview = document.getElementById("preview");


    const runBtn = document.getElementById("run");
    const clearBtn = document.getElementById("clear");
    const backBtn = document.getElementById("back");

    cssToggle.onclick = () => {

      if (cssBox.style.display === "none") {
        cssBox.style.display = "block";
      } else {
        cssBox.style.display = "none";
      }

    };

    jsToggle.onclick = () => {

      if (jsBox.style.display === "none") {
        jsBox.style.display = "block";
      } else {
        jsBox.style.display = "none";
      }

    };

    runBtn.onclick = () => {

      const finalCode = `
        ${htmlEditor.value}

        <style>
        ${cssEditor.value}
        </style>

        <script>
        ${jsEditor.value}
        <\/script>
      `;

      preview.srcdoc = finalCode;

      document.querySelectorAll(".editor-box").forEach(box => {
        box.style.display = "none";
      });

      document.querySelector(".toggle-buttons").style.display = "none";

      preview.style.display = "block";

      runBtn.style.display = "none";
      clearBtn.style.display = "none";
      backBtn.style.display = "inline-block";
    };

    backBtn.onclick = () => {

      document.querySelectorAll(".editor-box").forEach(box => {
        box.style.display = "block";
      });

      document.querySelector(".toggle-buttons").style.display = "flex";

      preview.style.display = "none";

      runBtn.style.display = "inline-block";
      clearBtn.style.display = "inline-block";
      backBtn.style.display = "none";
    };

    clearBtn.onclick = () => {

      htmlEditor.value = "";
      cssEditor.value = "";
      jsEditor.value = "";

      preview.srcdoc = "";
    };

  