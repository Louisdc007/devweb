import { useState } from "react";
import { AgentCard } from "./Agent";

function App() {
  const [name, setName] = useState("Name");
  const [id, setId] = useState(NaN);
  const [city, setCity] = useState("City");
  const [pic, setPic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png");
  return (
    <>
      <h1 className="text-7xl m-5 text-center mb-50">Agent generator</h1>
      <AgentCard nom={name} id={id} ville={city} photo={pic} />
      <button className="bg-gray-300 border p-1 ">Add Agent</button>
    </>
  );
}

export default App;
