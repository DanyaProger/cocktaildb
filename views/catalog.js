const catalog = `
<link rel="stylesheet" href="styles/catalog.css">
<div class="sort-section">
    <div class="sort">
        <a class="sort-select" href="#" onclick="return false;">Sort</a>
        <ul class="sort-list hidden">
        <li><a href="#" onclick="changeSort('name'); return false;">Name</a></li>
        <li><a href="#" onclick="changeSort('rating'); return false;">Rating</a></li>
        <li><a href="#" onclick="changeSort('date'); return false;">Date</a></li>
        </ul>
    </div>
</div>
<section id="catalog-grid">
</section>
`;