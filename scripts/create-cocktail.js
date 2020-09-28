function addIngredient() {
    let ingredientListItem =
    `<div class="flex-ingredient-wrap">
       <select class="ingredients-select" name="ingredients-select" onchange="recalculateImage();">
         <option value="water">Water</option>
         <option value="light-rum">Light Rum</option>
         <option value="lime-juice">Lime Juice</option>
         <option value="milk">Milk</option>
         <option value="sugar">Sugar</option>
         <option value="banan">Banan</option>
         <option value="rum">Rum</option>
         <option value="bourbon">Bourbon</option>
         <option value="cocacola">Cocacola</option>
       </select>
       <input class="ingredient-value-input" type="number" name="ingredient-value" value="" placeholder="%" oninput="recalculateImage();" required>
       <button class="remove-ingredient-button" type="button" name="remove-ingredient-button" onclick="removeIngredient();">-</button>
    </div>
    `
    const maxIngredientsCount = 5;
    let items = document.getElementsByClassName('ingredient-select-list-item');
  
    if (items.length == maxIngredientsCount - 1) {
      let addButton = document.getElementById('add-ingredient-button');
      addButton.style.display = 'none';
    }
  
    if (items.length < maxIngredientsCount) {
      let ingredientsList = document.querySelector('.ingredients-select-list');
      let ingredientItem = document.createElement('li');
      ingredientItem.classList.add('ingredient-select-list-item');
      ingredientItem.innerHTML = ingredientListItem;
      ingredientsList.appendChild(ingredientItem);
    }
  }
  
function removeIngredient() {
    let items = document.getElementsByClassName('ingredient-select-list-item');
  
    const maxIngredientsCount = 5;
    if (items.length == maxIngredientsCount) {
      let addButton = document.getElementById('add-ingredient-button');
      addButton.style.display = 'block';
    }
    let item = event.srcElement.closest(".ingredient-select-list-item");
    item.parentNode.removeChild(item);
    recalculateImage();
  }
  
function recalculateImage() {
    let ingredientDivs = document.getElementsByClassName('cocktail-ingredient');
    while (ingredientDivs.length != 0) {
        ingredientDivs[0].parentNode.removeChild(ingredientDivs[0]);
    }
  
    let ingredientsSelects = document.getElementsByClassName('ingredients-select');
    let ingredientsValues = document.getElementsByClassName('ingredient-value-input');
  
    let ingredientsCount = ingredientsSelects.length;
    let sumOfValues = 0;
    let ingredients = [];
    for (let i = 0; i < ingredientsCount; i++) {
      let name = ingredientsSelects[i].value;
      let value = parseInt(ingredientsValues[i].value) | 0;
      sumOfValues += value;
      ingredients.push(new Ingredient(name, value));
    }
  
    const maxSumOfValues = 100;
    if (sumOfValues > maxSumOfValues) {
      return;
    }
  
    let cocktailImageDiv = document.querySelector('.cocktail-image');
    cocktailImageDiv.innerHTML = createCocktailImageDiv(ingredients).innerHTML;
}
  
function submitForm() {
    let name = document.getElementById('cocktail-name').value;
    let description = document.getElementById('description-textarea').value;
  
    let ingredients = [];
    let ingredientsSelects = document.getElementsByClassName('ingredients-select');
    let ingredientsValues = document.getElementsByClassName('ingredient-value-input');
  
    let sumOfValues = 0;
    for (let value of ingredientsValues) {
        sumOfValues += parseInt(value.value) | 0;
    }
  
    if (sumOfValues > 100) {
        alert('Sum of ingredients should be less than 100');
        return;
    }
  
    for (let i = 0; i < ingredientsSelects.length; i++) {
        let name = ingredientsSelects[i].value;
        let value = parseInt(ingredientsValues[i].value) | 0;
        ingredients.push(new Ingredient(name, value));
    }
  
    let cocktail = new Cocktail(name.trim(), 'Admin', description, ingredients);
    cocktailsStorage.addCocktail(cocktail);
    onNavigate('/');
}