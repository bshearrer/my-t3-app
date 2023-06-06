import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Stack } from '@mui/material';
import { type NavItemType } from '../Nav';
import { NavItem } from './NavItem';

type NavItemsProps = {
	navItems: NavItemType[];
	alignment: 'left' | 'center' | 'right';
	itemColor: string;
	activeItemColor: string;
	isMobile: boolean;
	setOpenMobileDrawer: (open: boolean) => void;
	openMobileDrawer: boolean;
};

export const NavItems = ({
	navItems,
	alignment,
	itemColor,
	activeItemColor,
	isMobile,
	setOpenMobileDrawer,
	openMobileDrawer,
}: NavItemsProps) => {
	if (isMobile) {
		return (
			<IconButton color="inherit" onClick={() => setOpenMobileDrawer(!openMobileDrawer)} sx={{ mr: 1 }}>
				<MenuIcon />
			</IconButton>
		);
	}

	return (
		<Box flexGrow={alignment === 'center' ? 1 : 0}>
			<Stack direction={'row'} spacing={1} color={itemColor}>
				{navItems.map((item) => (
					<NavItem key={item.href} item={item} activeItemColor={activeItemColor} />
				))}
			</Stack>
		</Box>
	);
};
