import React from 'react';
import style from './recipe.module.css';
import EditCommentItemForm from './EditCommentItemForm'


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
            <EditCommentItemForm />

        </div>
       


    )
}

export default Recipe;