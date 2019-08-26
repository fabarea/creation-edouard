module.exports = (eleventyConfig) => {

	eleventyConfig.addCollection('posts', (collection) => {
		return collection.getFilteredByGlob('_posts/**/*.md');
	});

	eleventyConfig.addCollection('products', (collection) => {
		return collection.getFilteredByGlob('_products/**/*.md');
	});

	return {
		templateFormats: [
			'md',
			"ejs",
			"css",
			"jpeg",
			"png",
			"mustache",
		],
		passthroughFileCopy: true,
	};
};
