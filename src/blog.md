---
title: 'Blog | Rafael Calvo'
layout: 'layouts/feed.njk'
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Publicciones recientes'
paginationNextText: 'Publicaciones anteriores'
paginationAnchor: '#post-list'
---

Aqui vengo a escribir sobre varias cosas. Desde tutoriales, hasta algunos consejos de vida y trabajo.
