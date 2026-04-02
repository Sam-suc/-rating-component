  // Select the button

const btn = document.querySelector(".submit-btn");

  // Listen for the click

btn.addEventListener('click', () =>{
  
  //  Create a new link element

  const newStyleLink = document.createElement('link');
  newStyleLink.rel = 'stylesheet';
  newStyleLink.href = 'new-style.css'; // Path to your second CSS file
  document.head.appendChild(newStyleLink);

   // Define  NEW HTML structure as a string
  const newHtml = `
     <h1> I think we did it !<h1>
  
  `
   document.body.innerHTML = newHtml;
 });