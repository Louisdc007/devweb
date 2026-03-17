const random = () => {
  return Math.floor(Math.random() * 30) + 1;
};
export const getUser = async () => {
  const donnees = await fetch(
    "https://dummyjson.com/users/" + String(random()),
  );
  return await donnees.json();
};
