document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const slideContainers = document.querySelectorAll(".slide-container");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      // Remove active states from all buttons and containers
      tabButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      slideContainers.forEach(slide => {
        slide.classList.remove("active");
      });

      // Activate target button and container
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        targetSlide.classList.add("active");
      }
    });
  });
});