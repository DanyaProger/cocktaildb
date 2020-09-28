function getCocktailRating(cocktail) {
    if (!('marks' in cocktail)) {
      return 0;
    }
  
    let marks = Object.values(cocktail.marks);
    if (marks.length == 0) {
      return 0;
    }
    return marks.reduce((a, b) => (a + b)) / marks.length;
  }

function getURLParam(param) {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let value = urlParams.get(param);
  return value;
}

function searchCocktail() {
  let input = document.getElementById("search-input");
  let text = input.value.trim().toLowerCase();
  input.value = "";
  if (text.trim() == "") {
    return;
  }

  let cocktails = cocktailsStorage.getCocktails();

  for (let id in cocktails) {
    let cocktailName = cocktails[id].name.toLowerCase();
    if (cocktailName.includes(text)) {
      onNavigate('/cocktail-info?id=' + id);
      return;
    }
  }
  alert("Sorry, we couldn't find such cocktail.");
}

logoutLink = document.querySelector('.logout-button')
logoutLink.addEventListener("click", (e) => {
  authService.logOut();
}, true);