class Cocktail {
    constructor(name, addedBy, description, ingredients) {
      this.description = description;
      this.name = name;
      this.addedBy = addedBy;
      this.ingredients = ingredients;
      this.createDate = new Date();
      this.marks = [];
      this.comments = [];
    }
  }