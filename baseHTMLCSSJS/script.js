/*
Memo

const coucou = () => {
    console.log("coucou");
};

function test(arg, arg2) {
    console.log("coucou");
}

const test = function (arg) {
    console.log("coucou");
};
*/

const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const h1 = document.querySelector("h1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    h1.textContent = "Merci pour ton message " + nameInput.value;
});
