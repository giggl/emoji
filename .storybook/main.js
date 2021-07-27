module.exports = {
	stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
	typescript: {
		check: true,
	},
};
