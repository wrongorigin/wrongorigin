module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("padStart", (value, length, fill) => {
    return String(value).padStart(length, fill || '0');
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  return {
    pathPrefix: "/wrongorigin/",
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};