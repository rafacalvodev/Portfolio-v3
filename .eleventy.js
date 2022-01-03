const rssPlugin = require('@11ty/eleventy-plugin-rss');
const { DateTime } = require("luxon");

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');



module.exports = function (eleventyConfig) {
  // Add filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);


  eleventyConfig.addWatchTarget("./src/sass");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/fonts");


  // Returns work items, sorted by display order
  eleventyConfig.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/proyectos/*.md'));
  });

  // Returns work items, sorted by display order then filtered by featured
  eleventyConfig.addCollection('featuredWork', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/proyectos/*.md')).filter(
      x => x.data.featured
    );
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
  });


  /* ----- PRUEBA DEL BLOG ----- */


  /* ----- FIN DE PRUEBA DEL BLOG ----- */


  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
