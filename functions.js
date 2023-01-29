// Get all the rating buttons
const ratingBtns = document.querySelectorAll('.rating-btn');
// Add a click event listener to each button
ratingBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove the active class from all buttons
    ratingBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    // Add the active class to the clicked button
    this.classList.add('active');
  });
});

// Get the submit button
const submitBtn = document.getElementById('submitBtn');
// Add a click event listener to the submit button
submitBtn.addEventListener('click', function() {
  // Get the active button
  const activeBtn = document.querySelector('.rating-btn.active');
  // Check if there is an active button
  if (activeBtn) {
    // Get the rating from the active button
    const rating = activeBtn.textContent;
    // redirect to new page with the rating as parameter
    window.location.href = 'sucess.html?rating=' + rating;
  } else {
    // If there is no active button, display an alert
    alert('Please select a rating');
  }
});
