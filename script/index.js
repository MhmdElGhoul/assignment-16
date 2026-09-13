
const main = document.querySelector("#main_section");
const title = document.createElement("h1");
title.innerText = `This is a title`
main.appendChild(title);
const para = document.createElement("p");
para.innerHTML = `this is an <u>underlined</u> text`;
main.appendChild(para);
console.log (`Text of h1 is ${title.innerText}`);
console.log (`Text of p is ${para.innerText}`);