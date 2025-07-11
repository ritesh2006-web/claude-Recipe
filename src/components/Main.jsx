import React from "react";
import IngredientsList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        console.log("Fetching")
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="addIng">Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe = {getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}

        </main>
    )
}
