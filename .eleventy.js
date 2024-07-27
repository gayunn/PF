const sass = require("sass");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Sass 컴파일 설정
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      let result = sass.compile(inputPath);
      return async (data) => {
        return result.css;
      };
    }
  });

  // CSS 파일 복사
  eleventyConfig.addPassthroughCopy("src/styles");
  // JavaScript 파일 복사
  eleventyConfig.addPassthroughCopy("src/includes/js");
  // 다른 정적 파일들도 필요하다면 여기에 추가
  // eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "includes",
    }
  };
};