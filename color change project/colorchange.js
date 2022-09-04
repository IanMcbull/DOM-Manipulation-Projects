// With this project we want to change the color of the box everytime we click the button

// so the first thing we need to do is get the button element.
// We will again use querySelector to get the element

const changeColorButton = document.querySelector('#changeColorButton')

// the next thing we need to do is listen for click event.
// We will again use addEventListener to listen for a click event

changeColorButton.addEventListener('click',()=>{
    
    // Now the need to change the color to red when we click the button

    // We can do this in two ways:
    // The first method is by using the style property on the element we are targeting

    // so let's get the div element
    const box = document.querySelector('.box')
    
    // Now that we have the element, we need to access the background property
    //box.style.background = 'gray'
    // The style property gives access to the background property which we can then use to change the background color of the box.

    // Method Two
    // Adding a class to the div that will change the background color to red.

    // Make sure you have a css file that has a class name red, that styles the background to red
    // But because we already have a bg-yellow class that's applying a different color, we need to remove that first

    //box.classList.remove('bg-yellow-500')
    //box.classList.add('red')

    // Now let's give the box a new color everytime we click the button
   
    box.style.background = `rgb(${colorGenaretor().red},${colorGenaretor().green},${colorGenaretor().blue},0.5)`
})

// What if we wanted the box to change to a random different color everytime we click

// Let's write a function that generated a new random color


function colorGenaretor(){
    // We are going to be using rgb scheme. So we need three random values between 0- 255
    // We'll use the random function to generate a random number
    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    //console.log(red,green,blue)
    return {
        red,
        green,
        blue
    }
}


//colorGenaretor()

