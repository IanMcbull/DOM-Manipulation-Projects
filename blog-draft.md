# Let's talk about the Document Object Model
One of the topics that I personally struggled with at the beginning of my coidng journey was the DOM. This blog post is intended for people who are in the same boat as I was. 
I had questions like:

- Why is the DOM even necessary
- How does it work. 
- How can I use it to manipulate the DOM.

I will try to answer some of these questions in this blog post. I hope you enjoy and learn something new.

## What is the DOM?
The acronym DOM stands for Document Object Model. 
Let's dissect those 3 words.

## Why a Document?
Well the HTMl file you work with, is athe Document being refarred to hers.

## Why an Object?
An object because the elements in the HTML file are objects.

## Why a Model?
A model because the browser will take your HTMl code and make a duplicate model from you source code.

## So what is it used for?
The DOM is used to manipulate the HTML file without touching the source code. It is an API.
We can update the DOM, delete elements from the DOM, create new elements in the DOM and so on.\
We can basically do CRUD(create, read, Update and delete) operations on the DOM.

The DOM is an object-oriented representation of the HTML document. This allows us to use programming languages like JavaScript to interact with the HTML document without changing the actual HTML document.

We'll look at some of the methods available that allow us to perform the said operations. 

## Creating new elements
To create new elements in the DOM, we use the `createElement` method.

```js
document.createElement('div')
```
We call the method on the document object and pass in the tag name of the element we want to create. The document object is available to use in the browser. 

## Reading elements
To read elements from the DOM, we use the following methods:

- `getElementById(id)`
- `getElementsByTagName(tag)`
- `getElementsByClassName(class)`
- `querySelector(selector)`
- `querySelectorAll(selector)`


Reading an element simply means how can we access an element. We can use any of the above methods to access an element. The table below shows the return values for each method:

| Method | Return value |
| --- | --- |
| `getElementById(id)` | Element or Null |
| `getElementsByTagName(tag)` | HTMLCollection |
| `getElementsByClassName(class)` | HTMLCollection |
| `querySelector(selector)` | Element |
| `querySelectorAll(selector)` | NodeList |


