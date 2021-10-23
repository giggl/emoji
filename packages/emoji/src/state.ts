import {atom} from 'jotai';
import {Coords} from './types';

export const atoms = {
	location: atom<Coords | null>(null),
} as const;
