  const popup = document.getElementById('popup-overlay');
  const closeBtn = document.querySelector('.close-btn');
  const form = document.getElementById('getStartedForm');

  // for the two Get Started buttons (nav + hero)
  const getStartedButtons = document.querySelectorAll('.getstarted, .getstarted-two');

  // Open popup when any of the Get Started button is clicked
  getStartedButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.display = 'flex';
    });
  });

  // to close
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // to close popup when clicking outside the form
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });

  // for form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Thank you! We’ll contact you soon.');
    form.reset();
    popup.style.display = 'none';
  });
