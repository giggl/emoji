module.exports = {
	extends: ['xo', 'xo-typescript', 'xo-react'],
	rules: {
		'quote-props': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'operator-linebreak': 'off',
		'@typescript-eslint/indent': 'off',
		'react/jsx-tag-spacing': 'off',

		// Doesn't work well with forwardRef
		'react/prop-types': 'off',
	},
};
