import { Drawer, List, styled } from '@mui/material';
import { CLOSED_DRAWER_WIDTH, OPEN_DRAWER_WIDTH } from '../SideNav';

export const SideNavDrawer = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ open }) => ({
	width: open ? OPEN_DRAWER_WIDTH : CLOSED_DRAWER_WIDTH,
	transition: 'width 0.3s',
	'& .MuiDrawer-paper': {
		width: open ? OPEN_DRAWER_WIDTH : CLOSED_DRAWER_WIDTH,
		transition: 'width 0.3s',
	},
}));

export const SideNavList = styled(List)(({}) => ({
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
}));
