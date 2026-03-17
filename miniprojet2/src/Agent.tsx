interface agentProps {
  id: number;
  nom: string;
  ville: string;
  photo: string;
}

export const AgentCard = ({ id, nom, ville, photo }: agentProps) => {
  return (
    <div className="flex flex-row justify-around gap-2 bg-blue-400 m-4 rounded-[15px]">
      <img src={photo} className="w-50" />
      <div className="flex flex-col justify-around gap-5">
        <h2 className="text-2xl">
          <span className="font-bold">{nom}</span>
          {" " + String(id)}
        </h2>
        <p className="text-xl">{ville}</p>
      </div>
    </div>
  );
};
