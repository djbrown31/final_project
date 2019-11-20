const APP_ID = "290c1eea";
const APP_KEY = "61048d368ed07b137a7ef340f0b5d158";

const getRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    return data
  };

export default {
    getRecipes: getRecipes
}