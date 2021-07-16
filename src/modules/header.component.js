// import $ from "jquery";

// $("<h1 />").text("Hello world from JQuery").appendTo($("header"));

const header = document.querySelector("header");

header.insertAdjacentHTML("afterbegin", "<h1></h1>");

const h1 = document.querySelector("h1");

h1.textContent = "Hello world from JQuery";
