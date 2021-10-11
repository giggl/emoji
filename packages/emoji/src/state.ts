import {atom} from 'jotai';

export const atoms = {
	location: atom<[number, number] | [null, null]>([null, null]),
} as const;
