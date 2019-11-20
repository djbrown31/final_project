import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import recipeAPI from './api/recipeAPI'



const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  const fetchRecipes = async (query) => {
    const data = await recipeAPI.getRecipes(query)
    console.log(data.hits)
    setRecipes(data.hits)
  }

  useEffect(() => {
    if (query && search === '') {
      fetchRecipes(query)
      
    }
  }, [query, search])


  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 align="center">Enter What Is In Your Fridge</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
          </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            />
        ))}
      </div>
    </div>
  );
};


export default App;
