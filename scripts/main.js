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