const htmlEditor = document.getElementById("htmlEditor");
const cssEditor = document.getElementById("cssEditor");
const jsEditor = document.getElementById("jsEditor");

  const preview = document.getElementById("preview");
  const runBtn = document.getElementById("run");
  const clearBtn = document.getElementById("clear");
  const backBtn = document.getElementById("back");

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

      htmlEditor.style.display = "none";
      cssEditor.style.display = "none";
      jsEditor.style.display = "none";

      document.querySelectorAll(".editor-title").forEach(title => {
        title.style.display = "none";
      });

      preview.style.display = "block";

      runBtn.style.display = "none";
      clearBtn.style.display = "none";
      backBtn.style.display = "inline-block";
    };

    backBtn.onclick = () => {

      htmlEditor.style.display = "block";
      cssEditor.style.display = "block";
      jsEditor.style.display = "block";

      document.querySelectorAll(".editor-title").forEach(title => {
        title.style.display = "block";
      });

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

  