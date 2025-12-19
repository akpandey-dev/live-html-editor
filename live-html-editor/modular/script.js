
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

    const runBtn = document.getElementById("run");
    const clearBtn = document.getElementById("clear");
    const backBtn = document.getElementById("back");

    runBtn.onclick = () => {
    preview.srcdoc = editor.value;

      editor.style.display = "none";
      preview.style.display = "block";

      runBtn.style.display = "none";
      clearBtn.style.display = "none";
      backBtn.style.display = "inline-block";
    };

    backBtn.onclick = () => {
      editor.style.display = "block";
      preview.style.display = "none";

      runBtn.style.display = "inline-block";
      clearBtn.style.display = "inline-block";
      backBtn.style.display = "none";
    };

    clearBtn.onclick = () => {
  editor.value = "";
    preview.srcdoc = "";
    };
  