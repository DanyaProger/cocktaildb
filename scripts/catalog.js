function renderCatalog() {
    let catalogDiv = document.getElementById('catalog-grid');
    cocktailsStorage.getCocktails().forEach(function (cocktail, i) {
      let cocktailNode = document.createElement("a");
      cocktailNode.setAttribute('href', '#');
      cocktailNode.setAttribute('onclick', `onNavigate('/cocktail-info?id=${i}'); return false;`);
  
      cocktailNode.innerHTML = catalogItem;

      let cocktailImageDiv = cocktailNode.querySelector(".cocktail-image");
      cocktailImageDiv.innerHTML = createCocktailImageDiv(cocktail).innerHTML;

      let cocktailTitle = cocktailNode.querySelector(".cocktail-title");
      cocktailTitle.textContent = cocktail.name;

      let cocktailRating = cocktailNode.querySelector(".grid-item-rating");
      cocktailRating.innerHTML = createRatingDiv(getCocktailRating(cocktail)).innerHTML;

      catalogDiv.append(cocktailNode);
    });
  }

function createRatingDiv(rating) {
  let ratingDiv = document.createElement("div");
  ratingDiv.classList.add('grid-item-rating');
  for (let i = 0; i < 5; i++) {
    let starSpan = document.createElement("span");
    starSpan.classList.add("fa");
    starSpan.classList.add("fa-star");
    if (rating >= i + 0.5) {
      starSpan.classList.add("checked");
    }
    ratingDiv.appendChild(starSpan);
  }

  return ratingDiv;
}
  
renderCatalog();
  