function renderCocktailInfo() {
  let cocktailId = getURLParam('id');
  let cocktail = cocktailsStorage.getCocktail(cocktailId);
  setInfo(cocktail);
}

function setInfo(cocktail) {
    setPicture(cocktail);
    setTitle(cocktail);
    setIngredients(cocktail);
    setDetails(cocktail);
    renderComments(cocktail);
}

function setPicture(cocktail) {
    let cocktailImageDiv = document.querySelector(".cocktail-image");
    cocktailImageDiv.innerHTML = createCocktailImageDiv(cocktail.ingredients).innerHTML;
}

function setTitle(cocktail) {
    let cocktailTitle = document.querySelector(".cocktail-title");
    cocktailTitle.textContent = cocktail.name;
}

function setIngredients(cocktail) {
    let textIngredientsHTML = "";
    cocktail.ingredients.forEach(function(ingredient, i){
        textIngredientsHTML += `<li class="ingredient"><span class="ingedient-name">${ingredient.name}</span> <span class="ingedient-value">${ingredient.value}%</span></li>\n`;
    });
    let listIngredients = document.querySelector(".ingredients");
    listIngredients.innerHTML = textIngredientsHTML;
}

function setDetails(cocktail) {
    document.querySelector('.average-mark').textContent = getCocktailRating(cocktail).toFixed(2);
    document.querySelector('.cocktail-author').textContent = cocktail.addedBy;
    document.querySelector('.cocktail-description').textContent = cocktail.description;
}

function renderComments(cocktail) {
    let commentsList = document.querySelector('.comments-list');
    commentsList.innerHTML = "";
    cocktail.comments.forEach(comment => {
        let commentItem = document.createElement("li");
        commentItem.classList.add('comment-list-item');

        let commentDiv = document.createElement("div");
        commentDiv.classList.add('comment');

        let commentInfoDiv = document.createElement("div");
        commentInfoDiv.classList.add('comment-info');

        let commentAuthor = document.createElement("p");
        commentAuthor.classList.add('comment-author');
        commentAuthor.textContent = comment.author;
        commentInfoDiv.appendChild(commentAuthor);

        let time = document.createElement("time");
        time.setAttribute('datetime', comment.date);
        time.textContent = comment.date.toLocaleString('en-GB');
        commentInfoDiv.appendChild(time);

        let commentText = document.createElement("p");
        commentText.classList.add('comment-text');
        commentText.textContent = comment.text;

        commentDiv.appendChild(commentInfoDiv);
        commentDiv.appendChild(commentText);

        commentItem.appendChild(commentDiv);
        commentsList.prepend(commentItem);
    });
}

function setMark(button) {
    let mark = parseInt(button.value);
    let cocktailId = getURLParam('id');
    cocktailsStorage.addMark(cocktailId, mark);
    let cocktail = cocktailsStorage.getCocktail(cocktailId);
    document.querySelector('.average-mark').textContent = getCocktailRating(cocktail).toFixed(2);
  }

function sendComment() {
    let input = document.getElementById('comment');
    let text = input.value;
  
    if (text.trim() == "") {
      return;
    }
    input.value = "";
    let comment = new userComment(text);
    let cocktailId = getURLParam('id');
    cocktailsStorage.addUserComment(cocktailId, comment);
    let cocktail = cocktailsStorage.getCocktail(cocktailId);
    renderComments(cocktail);
  }

renderCocktailInfo();