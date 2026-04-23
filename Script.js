
   
   const submitBtn = document.querySelector('.submit-btn');

   submitBtn.addEventListener('click', () => {
    //  Get the checked radio button
    const selected = document.querySelector('input[name="rating"]:checked');
    
    if (selected) {
        //  SAVE the value to localStorage
        localStorage.setItem('userRating', selected.value);
        
        
        //  Move to the next page
        window.location.href = "new.html"; 
    } else {
      alert("Please select a rating!")
    }
});


