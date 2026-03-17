import { calculerAnneeNaissance } from "./calcul.js";
import { recupererImageChien } from "./api.js";

console.log(calculerAnneeNaissance(18));

const imgChien = document.querySelector("#imgChien");

const btnChien = document.querySelector("#btnChien");
btnChien.addEventListener("click", async () => {
    const donneesChien = await recupererImageChien();
    imgChien.setAttribute("src", donneesChien["message"]);
});

console.log("end script");
