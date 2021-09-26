export const emojis = [{name: '', unified: '', category: ''}] as const;

export type EmojiListItem = typeof emojis[number];
export type EmojiCategory = typeof emojis[number]['category'];
