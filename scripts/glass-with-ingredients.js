function getIngredientStyleString(value) {
    return `clip-path: inset(${value}% 0 0 0);
    -webkit-clip-path: inset(${value}% 0 0 0);`;
  }
  
function createCocktailImageDiv(cocktail) {
    let cocktailImageDiv = document.createElement("div");
    cocktailImageDiv.classList.add("cocktail-image");
    cocktailImageDiv.innerHTML = cocktailImage;

    let sumOfIngredients = 0;

    for (let ingredient of cocktail.ingredients) {
        sumOfIngredients += ingredient.value;
    }

    let ingredientContainer = cocktailImageDiv.querySelector(".ingredient-container");

    for (let ingredient of cocktail.ingredients) {
        let ingredientDiv = document.createElement("div");
        ingredientDiv.classList.add("cocktail-ingredient");
        ingredientDiv.classList.add(ingredient.name);
        ingredientDiv.setAttribute("style", getIngredientStyleString(100 - sumOfIngredients | 0));
        sumOfIngredients -= ingredient.value;
        ingredientContainer.appendChild(ingredientDiv);
    }

    return cocktailImageDiv;
}
  