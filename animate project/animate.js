// Now for this mini project we need to animate the ball and have it move up and down when we click the button

// Again, we start by getting the button element using querySelector

const animateButton = document.querySelector('.animateButton');

// Then we will an event listener to for a click event.
animateButton.addEventListener('click',()=>{
  // Now let's get the element we want to animate
   const ball = document.querySelector('.ball');
  ball.classList.add('moveball')
})


// Now let's write a function that stops the animation
// We will again get the button element
const stopAnimationButton = document.querySelector('.stopAnimation');

// Let's add an event listener to the button and listen for a click event
stopAnimationButton.addEventListener('click',()=>{
    const ball = document.querySelector('.ball');
    // Let's now remove the animation by removing the moveball class from our element
  ball.classList.remove('moveball')
})

