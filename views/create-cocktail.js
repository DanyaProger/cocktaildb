const cocktailCreate = `
<link rel="stylesheet" href="styles/create-cocktail.css">
<form class="create-cocktail-form" onsubmit="submitForm(); return false;">
    <div class="cocktail-form-block">
        <div class="cocktail-form-left">
        <div class="cocktail-image">
            <img src="images/glass.png">
        </div>
        <input type="text" id="cocktail-name" name="cocktail-name" value="" placeholder="Enter cocktail title..." required>
        </div>
        <div class="vertical-seporator"></div>
        <div class="cocktail-form-right">
        <div class="add-ingredients-section">
            <ol class="ingredients-select-list">
            <li class="ingredient-select-list-item">
                <div class="flex-ingredient-wrap">
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
                </div>
            </li>
            </ol>
            <button id="add-ingredient-button" type="button" name="add-ingredient-button" onclick="addIngredient();">+</button>
        </div>
        <textarea id="description-textarea" name="name" rows="4" placeholder="Description"></textarea>
        <button id="create-button" type="submit" name="create-button">Create</button>
        </div>
    </div>
</form>
`;