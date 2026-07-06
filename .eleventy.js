module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
