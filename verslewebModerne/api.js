export const recupererImageChien = async () => {
    const rep = await fetch("https://dog.ceo/api/breeds/image/random");
    const donnees = await rep.json();
    return donnees;
};
