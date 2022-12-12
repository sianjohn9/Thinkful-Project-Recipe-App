import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState={
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState })
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row">
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={formData.content}
               />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="cuisine"
                onChange={handleChange}
                value={formData.content}
               />
            </td>
            <td>
               <input
                id="photo"
                type="url"
                name="photo"
                placeholder="photo"
                onChange={handleChange}
                value={formData.content}
               />
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="ingredients"
                onChange={handleChange}
                value={formData.content}
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                placeholder="preparation"
                onChange={handleChange}
                value={formData.content}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;