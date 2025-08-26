function showVersion(version) {
  const pdfMap = {
    'row1': [
      '/self_project/pdf_section/row_house1day.pdf',
      '/self_project/pdf_section/row_house1night.pdf'
    ],
    'row2': [
      '/self_project/pdf_section/row_house2day.pdf',
      '/self_project/pdf_section/row_house2night.pdf'
    ]
    // Add more versions if needed
  };

  const gallery = document.getElementById("gallery-display");

  if (pdfMap[version]) {
    gallery.innerHTML = `
      <div class="dual-pdf">
        <iframe src="${pdfMap[version][0]}" title="Row House ${version.slice(-1)} Day View"></iframe>
        <iframe src="${pdfMap[version][1]}" title="Row House ${version.slice(-1)} Night View"></iframe>
      </div>
    `;
  }

  let buttons = document.querySelectorAll(".project-options button");
  buttons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`button[onclick="showVersion('${version}')"]`).classList.add("active");
}
