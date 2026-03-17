export const getUser = async (id) => {
    const donnees = await fetch("https://dummyjson.com/users/" + String(id));
    const result = await donnees.json();
    return result;
};
