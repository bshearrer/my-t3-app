import { createContext, useContext } from 'react';

export type Alert = {
	message: string;
	severity: 'error' | 'success' | 'info' | 'warning';
	autoHideDuration?: number;
};

type AlertContextType = {
	addAlert: (alert: Alert) => void;
};

export const AlertContext = createContext<AlertContextType>({
	addAlert: () => {
		throw new Error(
			'addAlert() not implemented. Are you using AlertProvider?',
		);
	},
});

export function useAlert() {
	return useContext(AlertContext);
}
