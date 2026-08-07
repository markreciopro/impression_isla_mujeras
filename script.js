function switchSlide(slideId, activeBtn) {
  // Hide all slide containers
  document.querySelectorAll('.slide-container').forEach(slide => {
    slide.classList.remove('active');
  });

  // Deactivate all tab buttons and update ARIA states
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });

  // Activate the selected slide container
  const selectedSlide = document.getElementById(slideId);
  if (selectedSlide) {
    selectedSlide.classList.add('active');
  }

  // Set the clicked button as active
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-selected', 'true');
  }
}