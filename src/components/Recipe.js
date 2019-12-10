import React from 'react';
import style from './recipe.module.css';
import AddCommentPage from '../pages/AddCommentPage';
import HomePage from '../pages/HomePage'
import DeleteCommentPage from '../pages/DeleteCommentPage';


const Recipe = ({title,image,ingredients,url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a href={url}>{title}</a>
            <img className={style.image} src={image} alt=""/>
            <HomePage />
            <AddCommentPage />
            <DeleteCommentPage />
            

        </div>
       


    )
}

export default Recipe;