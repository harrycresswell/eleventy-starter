module.exports = function(config) {
  
  // add collection for posts
  config.addCollection('posts', function(collection) {
    return collection.getFilteredByGlob('src/site/posts/*.md')
  })

  return {
    dir: {
      input: "src/site",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid",
      "css",
    ],
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    passthroughFileCopy: true
  };

};