import React, {createContext, ReactNode, useContext} from 'react';
import {OnPick} from './types';

const picker = createContext<OnPick | null>(null);

/**
 * Provider to allow components to access the current picker function
 * @param props
 * @constructor
 */
export function PickerProvider(props: {picker: OnPick; children: ReactNode}) {
	return <picker.Provider value={props.picker} children={props.children} />;
}

/**
 * Gets the current picker function from context
 * @param fallback An optional fallback if no Provider is found. Honestly idk why this is a feature
 */
export function usePicker(fallback?: OnPick) {
	const value = useContext(picker) ?? fallback;

	if (!value) {
		throw new Error('No <PickerProvider /> found in tree.');
	}

	return value;
}
