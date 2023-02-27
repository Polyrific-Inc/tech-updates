---
layout: page
title: Search
permalink: /search/
---

<!-- HTML elements for search -->
<div id="search-container">
    <input type="text" id="search-input" placeholder="Search..">
    <ul id="results-container"></ul>
</div>

<!-- or without installing anything -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>