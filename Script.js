
    // Inside your first JS file or <script> tag:
   const submitBtn = document.querySelector('.submit-btn');

   submitBtn.addEventListener('click', () => {
    // 1. Get the checked radio button
    const selected = document.querySelector('input[name="rating"]:checked');
    
    if (selected) {
        // 2. SAVE the value to localStorage
        localStorage.setItem('userRating', selected.value);
        
        
        // 3. Move to the next page
        window.location.href = "new.html"; 
    } else {
      alert("Please select a rating!")
    }
});


