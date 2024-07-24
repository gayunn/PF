const sass = require("sass");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");

  // Compile Sass to CSS
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      let result = sass.compile(inputPath);
      return async (data) => {
        return result.css;
      };
    }
  });

  // CSS 파일을 출력 디렉토리로 복사
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: "docs",
      output: "dist",
      includes: "_includes"
    }
  };
};