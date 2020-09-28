function renderCatalog() {
    let catalogDiv = document.getElementById('catalog-grid');
    let cocktails = filterCatalog(getURLParam('sort'), cocktailsStorage.getCocktails());

    cocktails.forEach((cocktailWithId) => {
      let cocktail = cocktailWithId.value;
      let i = cocktailWithId.id;
      let cocktailNode = document.createElement("a");
      cocktailNode.setAttribute('href', '#');
      cocktailNode.setAttribute('onclick', `onNavigate('/cocktail-info?id=${i}'); return false;`);
  
      cocktailNode.innerHTML = catalogItem;

      let cocktailImageDiv = cocktailNode.querySelector(".cocktail-image");
      cocktailImageDiv.innerHTML = createCocktailImageDiv(cocktail.ingredients).innerHTML;

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

function filterCatalog(sortOption, catalog) {
  let catalogArray = [];

  for (let cocktailId in catalog) {
    catalogArray.push({id: cocktailId, value: catalog[cocktailId]});
  }
  catalogArray.reverse();

  if (sortOption == null) {
    return catalogArray;
  }

  switch (sortOption) {
    case 'name':
      catalogArray.sort(function(a, b) {
        var nameA = a.value.name.toLowerCase(), nameB = b.value.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      break;
    case 'rating':
      catalogArray.sort((a, b) => getCocktailRating(b.value) - getCocktailRating(a.value));
      break;
    case 'date':
      catalogArray.sort((a, b) => b.value.createDate - a.value.createDate);
      break;
  }

  return catalogArray;
}

function changeSort(sortOption) {
  let url = `/catalog?sort=${sortOption}`;
  onNavigate(url);
}
  
renderCatalog();
  