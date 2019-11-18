import React, { Component } from 'react'
import Recipe from '../components/recipes.js'
import RecipesAPI from '../api/recipeapi.js'

class HomePage extends Component {
  state = {
    recipes: []
  }

  componentDidMount(){
    RecipesAPI.searchRecipes()
      .then((apiResponseJSON) => {
        this.setState({
          recipes: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1> Search Recipes </h1>
        <Recipe recipes={this.state.recipes} />
      </div>
    )
  }
}

export default HomePage