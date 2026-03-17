import "./App.css";
import { Carte } from "./components/Carte";
import { Header } from "./components/EnTete";
import { Footer } from "./components/PiedDePage";
import { useState } from "react";
import { getUser } from "./components/api";

function App() {
  const [nomActuel, setNomActuel] = useState("Inconnu");
  const [villeActuelle, setVilleActuelle] = useState("En attente");
  const [estEnChargement, setEstEnChargement] = useState(false);
  const [srcPic, setSrcPic] = useState(
    "https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg",
  );

  const recruterAgent = async () => {
    setEstEnChargement(true);
    const id = Math.floor(Math.random() * 20) + 1;
    const donnees = await getUser(id);

    setNomActuel(donnees.firstName + " " + donnees.lastName);
    setVilleActuelle(donnees.address.city);
    setSrcPic(donnees.image);
    setEstEnChargement(false);
  };

  return (
    <>
      <Header />
      <Carte nomAgent={nomActuel} mission={villeActuelle} srcPic={srcPic} />
      <button onClick={recruterAgent} disabled={estEnChargement}>
        {estEnChargement ? "Recherche dans la base" : "Recruter un agent"}
      </button>
      <Footer />
    </>
  );
}

export default App;
