// How do we create new Elements in The DOM?
// We need to first access the Document object.
// Which is representation of the HTML Document itself. 
// And because it's an object, we know it has properties and methods that we can use to perform different operations.

// if we look at our HTML file, we simply have a form and a submit button that listens for a submit event.
// let's start by first trying to get the form element. 

// There are a few methods availble to us that allow us to get elements. We'll be using querySelector for the remainder of the lessons.
// But the list below shows all the methods that are available to us.

// getElementById
// getElementByTagName
// getElementByClassName
// querySelector
// querySelectorAll


let element;
// We simply pass in the id as a parameter
//element = document.getElementById('form')
//console.log(element)
// If we find the element with that id, that element is returned.
// <form id="form" class="space-y-8 w-full mt-10">
// if the element is not found null is returned

//element = document.getElementsByTagName('forms')
//console.log(element)
// getElementByTagName return a HTML collection
// HTMLCollection { 0: form#form.space-y-8.w-full.mt-10, length: 1, … }
// If no elements are found an emepty HTMLCollection is returned

//element = document.getElementsByClassName('forms')
//console.log(element)
// By className also returns a HTMLCollection 
// If no elements were found an empty HTMLCollection is returned.

//element = document.querySelector('.form')
//console.log(element)
// Return the element that matched the query
// Or null if no match was found.

// We can also use querySelectorAll to find all instances of an element
// This method returns a NodeList

//element = document.querySelectorAll('form')
//console.log(element)

// One of the differences between HTMLCollections and Nodelists, is that the Collection only store HTML elements whilst the Nodelist can also contain text nodes.

// Now that we've seen the different ways in which we can get elements, let's get the form element and attatch an event listener on it:

// We first need to select the element we want:
element = document.querySelector('.form') // We are getting the element that has class of `form` from the DOM.

// we now need to add an eventListener to it
// To add an event listener we use the addEventListener on the element that we just retrieved from the DOM

const listenForClick = (e)=>{
    e.preventDefault()
    //console.log('User submitted')

    //document.querySelector('#userInfo').innerHTML = ''
    // We need to get the username and the password values:
    // So we can again use querySelector to get those elements:
     const username = document.querySelector('#username').value;
     const password = document.querySelector('#password').value;
    // console.log(username, password)
    
    // Creating The Paragraph elements
     let userNameparagraphElement = document.createElement('p');
     let userPasswordparagraphElement = document.createElement('p');


     // Creating the text nodes
     let userNameTextNode = document.createTextNode(`Username: ${username}`)
     let userPasswordTextNode = document.createTextNode(`Password: ${password}`);

     // Now lets add the two text nodes as childres to the two paragraphs
     // Add the username text node to the username paragraph
     userNameparagraphElement.appendChild(userNameTextNode)

     // Add the password text node to the password paragraph
     userPasswordparagraphElement.appendChild(userPasswordTextNode)

     // Now lets add the two paragraphs to our div element
     const userInfoDiv = document.querySelector('#userInfo')
     userInfoDiv.appendChild(userNameparagraphElement)
     userInfoDiv.appendChild(userPasswordparagraphElement)

}


 element.addEventListener('submit',listenForClick)


// We were able to get elements, create new elements and modify existing elements.



