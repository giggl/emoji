import React, {createContext, ReactNode, useContext} from 'react';
import {OnPick} from './types';

const picker = createContext<OnPick | null>(null);

export function PickerProvider(props: {picker: OnPick; children: ReactNode}) {
	return <picker.Provider value={props.picker} children={props.children} />;
}

export function usePicker(fallback?: OnPick) {
	const value = useContext(picker) ?? fallback;

	if (!value) {
		throw new Error('No <PickerProvider /> found in tree.');
	}

	return value;
}
