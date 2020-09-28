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

logoutLink = document.querySelector('.logout-button')
logoutLink.addEventListener("click", (e) => {
  authService.logOut();
}, true);