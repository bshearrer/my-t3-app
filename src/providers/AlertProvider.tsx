import { Container, Alert as MuiAlert, Slide, Snackbar } from '@mui/material';
import { useState, type PropsWithChildren } from 'react';
import { AlertContext, type Alert } from '../hooks/useAlert';

export function AlertProvider({ children }: PropsWithChildren) {
	const [alerts, setAlerts] = useState<Alert[]>([]);

	function addAlert(alert: Alert) {
		setAlerts((prevAlerts) => [...prevAlerts, alert]);
	}

	function addSuccessAlert(message: string) {
		addAlert({
			message,
			severity: 'success',
			autoHideDuration: 3000,
		});
	}

	function addErrorAlert(message: string) {
		addAlert({
			message,
			severity: 'error',
		});
	}

	const onCloseSnackbar = (i: number) => {
		setAlerts((prevAlerts) => prevAlerts.filter((_, alertIndex) => alertIndex !== i));
	};

	return (
		<AlertContext.Provider value={{ addAlert, addSuccessAlert, addErrorAlert }}>
			{children}
			<Container>
				{alerts.map((alert, i) => (
					<Snackbar
						key={i}
						open={true}
						autoHideDuration={alert.autoHideDuration ?? undefined}
						onClose={() => onCloseSnackbar(i)}
						TransitionComponent={Slide}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
					>
						<MuiAlert
							severity={alert.severity}
							sx={{ mb: 1, width: '400px' }}
							onClose={() => onCloseSnackbar(i)}
						>
							{alert.message}
						</MuiAlert>
					</Snackbar>
				))}
			</Container>
		</AlertContext.Provider>
	);
}
