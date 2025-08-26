(function () {
  const frameImg = document.getElementById("frameImage");
  const btnPrev = document.getElementById("framePrev");
  const btnNext = document.getElementById("frameNext");

  // Tumhari images ka folder aur naam
  const images = [
    "/academic work/finalYearProject/thesesImg/1.jpg",
    "/academic work/finalYearProject/thesesImg/2.jpg",
     "/academic work/finalYearProject/thesesImg/3.jpg",
    "/academic work/finalYearProject/thesesImg/4.jpg",
     "/academic work/finalYearProject/thesesImg/5.jpg",
    "/academic work/finalYearProject/thesesImg/6.jpg",
     "/academic work/finalYearProject/thesesImg/7.jpg",
    "/academic work/finalYearProject/thesesImg/8.jpg",
     "/academic work/finalYearProject/thesesImg/9.jpg",
    "/academic work/finalYearProject/thesesImg/10.jpg",
     "/academic work/finalYearProject/thesesImg/11.jpg",
    "/academic work/finalYearProject/thesesImg/12.jpg",
     "/academic work/finalYearProject/thesesImg/13.jpg",
    "/academic work/finalYearProject/thesesImg/14.jpg",
     "/academic work/finalYearProject/thesesImg/15.jpg",
    "/academic work/finalYearProject/thesesImg/16.jpg",
     "/academic work/finalYearProject/thesesImg/17.jpg",
    "/academic work/finalYearProject/thesesImg/18.jpg",
    // aur jitni hain utni add kar lo
  ];

  let index = 0;

  function showFrame(i) {
    index = (i + images.length) % images.length;
    frameImg.src = images[index];
    frameImg.alt = `Image ${index + 1}`;
  }

  // Button navigation
  btnPrev.addEventListener("click", () => showFrame(index - 1));
  btnNext.addEventListener("click", () => showFrame(index + 1));

  // Swipe navigation
  let startX = 0;
  frameImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  frameImg.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      showFrame(index + 1); // left swipe → next
    } else if (endX - startX > 50) {
      showFrame(index - 1); // right swipe → prev
    }
  });

  // Default image on load
  showFrame(0);
})();
