function showVersion(version) {
  const display = document.getElementById("gallery-display");
  let files = [];


  // Load PDFs (single or dual)
  if (files.length === 1) {
    display.innerHTML = `<iframe src="${files[0]}" width="100%" height="600px"></iframe>`;
  } else if (files.length === 2) {
    display.innerHTML = `
      <div class="dual-pdf">
        <iframe src="${files[0]}" width="49%" height="600px"></iframe>
        <iframe src="${files[1]}" width="49%" height="600px"></iframe>
      </div>
    `;
  }

  // Update active button
  const buttons = document.querySelectorAll(".project-options button");
  buttons.forEach(btn => btn.classList.remove("active"));
  const clickedBtn = document.querySelector(`[onclick="showVersion('${version}')"]`);
  clickedBtn.classList.add("active");
}

