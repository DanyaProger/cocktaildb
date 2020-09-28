function getIngredientStyleString(value) {
    /*return `clip-path: inset(${value}% 0 0 0);
    -webkit-clip-path: inset(${value}% 0 0 0);`;*/
    return `height: ${value}%`;
  }
  
function createCocktailImageDiv(ingredients) {
    let cocktailImageDiv = document.createElement("div");
    cocktailImageDiv.classList.add("cocktail-image");
    cocktailImageDiv.innerHTML = cocktailImage;

    let sumOfIngredients = 0;

    for (let ingredient of ingredients) {
        sumOfIngredients += ingredient.value;
    }

    let ingredientContainer = cocktailImageDiv.querySelector(".ingredient-container");

    for (let ingredient of ingredients) {
        let ingredientDiv = document.createElement("li");
        ingredientDiv.classList.add("cocktail-ingredient");
        ingredientDiv.classList.add(ingredient.name);
        ingredientDiv.setAttribute("style", getIngredientStyleString(ingredient.value));
        sumOfIngredients -= ingredient.value;
        ingredientContainer.appendChild(ingredientDiv);
    }

    return cocktailImageDiv;
}
  