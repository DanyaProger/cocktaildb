const catalog = `
<link rel="stylesheet" href="styles/catalog.css">
<div class="sort-section">
    <div class="filter">
        <a class="filter-select" href="#">Filter</a>
        <ul class="filter-list hidden">
        <li><a href="#">Top</a></li>
        <li><a href="#">All</a></li>
        </ul>
    </div>
    <div class="sort">
        <a class="sort-select" href="#" onclick="return false;">Sort</a>
        <ul class="sort-list hidden">
        <li><a href="#">Name</a></li>
        <li><a href="#">Rating</a></li>
        <li><a href="#">Date</a></li>
        </ul>
    </div>
</div>
<section id="catalog-grid">
</section>
`