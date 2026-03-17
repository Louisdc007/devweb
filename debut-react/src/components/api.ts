export const getUser = async (id: number) => {
  const donnees = await fetch("https://dummyjson.com/users/" + String(id));
  const result = await donnees.json();
  return result;
};
