import React, {createContext, ReactNode, useContext} from 'react';
import {OnPickFn} from './types';

const picker = createContext<OnPickFn | null>(null);

/**
 * Provider to allow components to access the current picker function
 * @param props
 * @constructor
 */
export const PickerProvider = (props: {
	picker: OnPickFn;
	children: ReactNode;
}) => <picker.Provider value={props.picker}>{props.children}</picker.Provider>;

/**
 * Gets the current picker function from context
 * @param fallback An optional fallback if no Provider is found. Honestly idk why this is a feature
 */
export function usePicker(fallback?: OnPickFn) {
	const value = useContext(picker) ?? fallback;

	if (!value) {
		throw new Error('No <PickerProvider /> found in tree.');
	}

	return value;
}
