interface CarteProps {
  nomAgent: string;
  mission: string;
  srcPic: string;
}

export const Carte = ({ nomAgent, mission, srcPic }: CarteProps) => {
  return (
    <div className="flex flex-col items-center p-[30px] bg-[#c2efeb] rounded-card my-5 mx-auto font-sans gap-[15px] w-[300px] shadow-md transition-transform duration-200 hover:-translate-y-1">
      <img
        alt="Photo de profil de l'agent"
        src={srcPic}
        className="w-[150px] h-[150px] object-cover rounded-full border-4 border-[#331e36]"
      />
      <h2 className="text-[#331e36] m-0">{nomAgent}</h2>
      <p className="text-[#555] m-0 font-bold">{mission}</p>
    </div>
  );
};
