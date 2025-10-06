Live Link : https://asadzamann.github.io/emergency-hotline/


JavaScript DOM and Events: Frequently Asked Questions
This document answers some common questions about JavaScript events and the DOM (Document Object Model).


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


* getElementById(id) Only picks one element based on its unique id.
  Returns one DOM element.
  For example, document.getElementById("header")

* getElementsByClassName(className)
  Choose all the items that have the class name you gave.
  Returns an HTMLCollection, which is a live collection that looks like an array.
  For example, document.getElementsByClassName("item")

* querySelector(selector) picks the first element that matches a CSS selector.
  For example, document.querySelector(".item")

* querySelectorAll(selector) picks out all the elements that match a CSS selector.
  Returns a NodeList (you can use forEach on it).
  For example, document.querySelectorAll(".item")

2. How do you create and insert a new element into the DOM?

Steps:

1. Create a new element using document.createElement().
2. Put things or features on it.
3. Use methods like appendChild(), append(), prepend(), or insertBefore() to put it into the DOM.

For example:


const newDiv = document.createElement("div"); newDiv.textContent = "Hello World!"; document.body.appendChild(newDiv;


3. What is Event Bubbling and how does it work?

* Event Bubbling is a way for an event to start at the target element and move up through its ancestors (parent, grandparent, etc.) until it reaches the root (document).

For example:


document.getElementById("child").addEventListener("click", () => console.log("Child clicked"));
When you click on the "parent" element, it will log "Parent clicked."


When you click on "Child," it logs both "Child clicked" and "Parent clicked."

4. What is Event Delegation in JavaScript? Why is it useful?

* Event delegation is a method in which you add a single event listener to a parent element. This listener then uses event bubbling to handle events for its child elements.
* You add one listener to a common ancestor instead of adding listeners to many different elements.
* Helpful because:

  * Makes things work better (fewer listeners). Works for elements that are made on the fly.

For example:


document.getElementById("list").addEventListener("click", function(event) { if (event.target.tagName === "LI") console.log("Clicked on:", event.target.textContent);


5. What is the difference between preventDefault() and stopPropagation() methods?

* preventDefault() stops the browser from doing what it normally does.
  Example: Don't let a form submit.

  document.querySelector("form").addEventListener("submit", (e) => { e.preventDefault(); // stops page reload console.log("Form submission prevented");
 

* stopPropagation() stops the event from going up (or down).
  For example, stop a click event from getting to parent elements.

  document.getElementById("child").addEventListener("click", (e) => { e.stopPropagation(); console.log("Child clicked only"); });


