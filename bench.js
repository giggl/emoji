const fs = require('fs');
const prettier = require('prettier');

const file = JSON.parse(fs.readFileSync('./emoji-picker/src/emoji.json').toString('utf-8'));

const mapped = file.map(emoji => {
	const {unified, name, category, short_name} = emoji;
	return {unified, name, category, short_name};
});

const prettierConfig = fs.readFileSync('./.prettierrc').toString('utf-8');

fs.writeFileSync(
	'./emoji-picker/src/emojis.ts',
	prettier.format(
		`
        export const emojis = ${JSON.stringify(mapped)};
        export type EmojiListItem = typeof emojis[number];
        export type EmojiCategory = EmojiListItem['category'];
  `,
		{
			...JSON.parse(prettierConfig),
			// useTabs: true,
			// singleQuote: true,
			parser: 'typescript',
		},
	),
);
