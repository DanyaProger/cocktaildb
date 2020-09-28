const cocktailInfo = `
<link rel="stylesheet" href="styles/cocktail-info.css">
<article class="cocktail-info">
<div class="cocktail-info-main">
    <div class="cocktail-picture-info">
        <div class="cocktail-image"></div>
        <h2 class="cocktail-title">Mojito</h2>
        <div class="star-rating">
            <input class="star-rating-input" id="star-rating-5" type="radio" name="rating" value="5" onclick="setMark(this);">
            <label class="star-rating-icon fa fa-star" for="star-rating-5"></label>
            <input class="star-rating-input" id="star-rating-4" type="radio" name="rating" value="4" onclick="setMark(this);">
            <label class="star-rating-icon fa fa-star" for="star-rating-4"></label>
            <input class="star-rating-input" id="star-rating-3" type="radio" name="rating" value="3" onclick="setMark(this);">
            <label class="star-rating-icon fa fa-star" for="star-rating-3"></label>
            <input class="star-rating-input" id="star-rating-2" type="radio" name="rating" value="2" onclick="setMark(this);">
            <label class="star-rating-icon fa fa-star" for="star-rating-2"></label>
            <input class="star-rating-input" id="star-rating-1" type="radio" name="rating" value="1" onclick="setMark(this);">
            <label class="star-rating-icon fa fa-star" for="star-rating-1"></label>
        </div>
    </div>
    <div class="cocktail-details">
    <ol class="ingredients">
        <li class="ingredient"><span class="ingedient-name">Water</span> <span class="ingedient-value">33%</span></li>
        <li class="ingredient"><span class="ingedient-name">Light rum</span> <span class="ingedient-value">33%</span></li>
        <li class="ingredient"><span class="ingedient-name">Lime</span> <span class="ingedient-value">34%</span></li>
    </ol>
    <div class="bottom-details">
        <p>Average mark: <span class="average-mark">5</span></p>
        <p>Added by: <span class="cocktail-author">Admin</span></p>
    </div>
    </div>
</div>
<div class="horizontal-seporator"></div>
<p class="cocktail-description">
    A survey by an international market research company found that in 2016 the mojito was the most popular cocktail in Britain and France.
</p>
</article>
<section class="comments-section">
<form class="comment-form" onsubmit="sendComment(); return false;">
    <textarea id="comment" rows="3" placeholder="Leave your comment here..."></textarea>
    <button id="create-button">Send</button>
</form>
<ul class="comments-list">
</ul>
</section>
`;