define( 'templates.mustache', [], function() { 'use strict'; return {
    "adminCarousel" : '<span class="results-page-current">1</span> of <span class="results-page-count">{{ pages }}</span> pages <span class="results-total">(Total Videos: {{total }})</span><div class="category-carousel"></div>',"autocompleteItem" : '<strong>{{ name }}</strong>',"carousel" : '<span class="carousel-title">{{displayTitle}}</span><div class="category-carousel"></div>',"carouselThumb" : '{{{thumb}}}<div class="title" title="{{title}}"><a href="{{url}}">{{title}}</a></div>',"example" : '<h1>Hello {{ name }}</h1>',
    "done": "true"
  }; });