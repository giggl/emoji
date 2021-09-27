module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'xo-react', 'xo-typescript'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: 'tsconfig.eslint.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-tag-spacing': 0,
		'react/function-component-definition': 0,
		'@typescript-eslint/indent': 0,
		'operator-linebreak': 0,
		'quote-props': 0,
	},
	ignorePatterns: ['**/*.js'],
};
