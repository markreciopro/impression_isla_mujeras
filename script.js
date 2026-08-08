document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const slideContainers = document.querySelectorAll('.slide-container');

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('data-target');

      // 1. Deactivate all tab buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      // 2. Hide all slides
      slideContainers.forEach(slide => {
        slide.classList.remove('active');
      });

      // 3. Activate selected button
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // 4. Show target slide
      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        targetSlide.classList.add('active');
      }
    });
  });
});