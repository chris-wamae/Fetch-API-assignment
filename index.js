// // ARROW FUNCTIONS

// function addTwoNumbers(a, b) {
//   return a + b;
// }

// // let total = addTwoNumbers(10, 20);

// let total = (a, b) => {
//   return a + b;
// };

// // callback functions
// let isDivisible = (x) => {
//   if (x % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let myTotal = total(50, 60); // 110
// let result = isDivisible(myTotal); //true
// // console.log(result);

// FETCH API - simple function that enables us to make requests for
// create a dynamic function that will be used to purely create element
// and add content to the elements
let createElementFunc = (element, content) => {
    console.log("Adding an element and its content")
    let createdElement = document.createElement(element)
    createdElement.textContent = content
    return createdElement
}
// create a function to append the added element to a desired destination
let appendElementFunc = (element) => {
    console.log("add the element to the desired location")
    document.querySelector("body").append(element)
}



 let baseURL = "https://jsonplaceholder.typicode.com";
let postsEndpoint = "/posts";

// post url [baseurl + endpoint]
let url = `${baseURL}${postsEndpoint}`;
console.log(url);

fetch(url)
  .then((posts) => posts.json())
  .then((response) => {
    let posts = response

    for (post of posts){
        console.log(post.title)
        appendElementFunc(createElementFunc("li",post.title))
        ;
        
    } });
