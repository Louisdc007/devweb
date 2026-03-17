import { getUser } from "./api.js";

const randomNb = () => {
    return Math.floor(Math.random() * 30) + 1;
};

let user;

const name = document.querySelector("#name");
const city = document.querySelector("#city");
const phone = document.querySelector("#phone");
const mail = document.querySelector("#mail");
const pict = document.querySelector("#profilpict");
const upbtn = document.querySelector("#changebtn");

const update = async () => {
    user = await getUser(randomNb());

    name.textContent =
        user["firstName"] + " " + user["lastName"] + " " + user["age"];
    city.textContent = user["address"]["city"];
    mail.textContent = user["email"];
    phone.textContent = user["phone"];
    pict.setAttribute("src", user["image"]);
};

update();

upbtn.addEventListener("click", () => {
    update();
});
