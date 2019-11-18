
function getRecipeAPI = (query) => { 
  fetch("https://api.spoonacular.com/recipes/findByIngredients", {
    "method": "GET",
    "headers": {
      Content-Type : application/json,
      API: "7e365ba77e7f4c079421b30b63b47427",
    }
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
}
  
export default {
  searchRecipes: searchRecipes,
}