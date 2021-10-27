import {atom} from 'jotai';
import {emojis} from '.';
import {Coords} from './types';

export const atoms = {
	location: atom<Coords | null>(null),
	currentCategory: atom(emojis[0].category),
} as const;
