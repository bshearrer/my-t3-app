import { Box } from '@mui/material';
import { type PropsWithChildren } from 'react';
import { SideNavDrawer } from '../sidenav/SidenavDrawer';

export const GlobalLayout = ({ children }: PropsWithChildren) => {
	return (
		<Box display={'flex'}>
			<SideNavDrawer />
			{children}
		</Box>
	);
};
