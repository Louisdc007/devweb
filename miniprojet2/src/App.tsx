import { useState } from "react";
import { AgentCard } from "./Agent";
import { getUser } from "./Api";

interface Agent {
  id: number;
  name: string;
  city: string;
  pic: string;
}

function App() {
  const [crew, setCrew] = useState<Agent[]>([]);
  const addAgent = async () => {
    const agent = await getUser();
    const objAgent = {
      id: agent.id,
      name: agent.firstName + " " + agent.lastName,
      city: agent.address.city,
      pic: agent.image,
    };

    setCrew((crew) => [...crew, objAgent])
  };
  return (
    <>
      <h1 className="text-7xl m-5 text-center mb-50">Agent generator</h1>

      <div className="grid grid-cols-3 gap-6 p-8">
        {crew.map((agent) => (
          <AgentCard
            key={agent.id}
            id={agent.id}
            nom={agent.name}
            ville={agent.city}
            photo={agent.pic}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center mt-30">
        <button
          className="bg-gray-300 border p-1 w-30 h-15 rounded-2xl cursor-pointer"
          onClick={addAgent}
        >
          Add Agent
        </button>
      </div>
    </>
  );
}

export default App;
