// Creating elements
let p = document.createElement('p')
// This will create a paragraph element.
// Modifying  content
p.textContent = "This is text content"
//Setting Attributes
p.setAttribute('class', 'paragraph')
// This will set the class attribute to paragraph.
// To manage classes we use the className property
p.className = 'paragraph'
// The preferred way to add classes to your elements is using classList
p.classList.add('paragraph')
// Adding id to an element
p.setAttribute('id', 'paragraph')
// or
p.id = 'paragraph'

// Attatching elements to other elements
document.body.appendChild(p)

// Removing elements
document.body.removeChild(p)

// Finding elements
