import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const DialogExample = () => {
	const router = useRouter();
	const [openDialog, setOpenDialog] = useState(false);

	const handleCloseDialog = (): void => {
		void router.push('/', undefined, { shallow: true });
	};

	useEffect(() => {
		if (router.query.modal === 'true') {
			setOpenDialog(true);
		} else {
			setOpenDialog(false);
		}
	}, [router.query]);

	return (
		<Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
			<DialogTitle>Dialog Title</DialogTitle>
			<DialogContent>
				<DialogContentText>Dialog Content</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCloseDialog} variant="contained">
					Foo
				</Button>
				<Button onClick={handleCloseDialog} variant="outlined">
					Bar
				</Button>
			</DialogActions>
		</Dialog>
	);
};
