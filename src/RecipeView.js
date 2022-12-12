import React from "react";

function Recipe({ recipe, deleteRecipe}) {
    console.log(recipe)
    return(
        <tr className="row">
        <td>
            {recipe.name}
        </td>
        <td>
            {recipe.cuisine}
        </td>
        <td className="photoFit">
            <img className="photoFit" src={recipe.photo} alt="tasty food"/>
        </td>
        <td className="content_td">
            <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
            <p>{recipe.preparation}</p>
        </td>
        <td>
           <button name="delete" onClick={deleteRecipe}>Delete</button>
        </td>
        </tr>
    )
}

export default Recipe