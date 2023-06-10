import { createContext, useContext } from 'react';

export type Alert = {
	message: string;
	severity: 'error' | 'success' | 'info' | 'warning';
	autoHideDuration?: number;
};

type AlertContextType = {
	addAlert: (alert: Alert) => void;
	addSuccessAlert: (message: string) => void;
	addErrorAlert: (message: string) => void;
};

export const AlertContext = createContext<AlertContextType>({
	addAlert: () => {
		throw new Error('addAlert() not implemented. Are you using AlertProvider?');
	},
	addSuccessAlert: () => {
		throw new Error('addSuccessAlert() not implemented. Are you using AlertProvider?');
	},
	addErrorAlert: () => {
		throw new Error('addErrorAlert() not implemented. Are you using AlertProvider?');
	},
});

export function useAlert() {
	return useContext(AlertContext);
}
