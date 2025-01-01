"use strict";

/*Document Object Model(DOM)*/
console.log("hello world!");
window.console.log("hello world!"); // whole code of JS itself know there is a global window object

window.alert("Urgent!"); // but we not specify global object of window as our JS code knows

/* console.log() : used to print
   console.dir() : used to print properties and methods of an object like document object. */

console.dir(document.body); // print tags, elements etc of body tag of html

console.dir(document.head); // write document.body.style.background = ""; to dynamically change background color
// similarly we can also make other dynamic changes, which vanishes once the webpage is refreshed
// So, one of the main benefit of DOM is to make dynamic changes using JS

/*DOM manipulation*/