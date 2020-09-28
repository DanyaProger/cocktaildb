class Storage {
    constructor() {
      this.cocktails = [
        new Cocktail(
            "Mojito",
            "Admin",
            "Empty space",
            [new Ingredient("water", 33), new Ingredient("light-rum", 33), new Ingredient("lime-juice", 34)]
        ),
        new Cocktail(
            "Mojito1",
            "Admin",
            "Empty space",
            [new Ingredient("milk", 33), new Ingredient("sugar", 33), new Ingredient("banan", 34)]
        ),
        new Cocktail(
            "Mojito2",
            "Admin",
            "Empty space",
            [new Ingredient("rum", 33), new Ingredient("bourbon", 33), new Ingredient("cocacola", 34)]
        )
      ];
      this.cocktails[0].marks = {'danila': 4};
    }
  
    addCocktail(cocktail) {
      this.cocktails.push(cocktail);
    }
  
    getCocktails() {
      return this.cocktails;
    }
  
    getCocktail(id) {
      return this.cocktails[id];
    }
  
    addMark(cocktailId, user, mark) {
      this.cocktails[cocktailId].marks[user] = mark;
    }
  
    addUserComment(cocktailId, comment) {
        this.cocktails[cocktailId].comments.push(comment);
    }
  }
  
  let cocktailsStorage = new Storage();