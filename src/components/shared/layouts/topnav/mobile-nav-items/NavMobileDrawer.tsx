import { Box, Drawer } from '@mui/material';
import { type NavItemType } from '../Nav';
import { NavLogo } from '../nav-items/NavLogo';
import { NavMobileItems } from './NavMobileItems';

type MobileNavDrawerProps = {
	openMobileDrawer: boolean;
	setOpenMobileDrawer: (open: boolean) => void;
	logoHref: string;
	navItems: NavItemType[];
	drawerLogoHref?: string;
	logoWidth?: number;
	logoHeight?: number;
	drawerLogoWidth?: number;
	drawerLogoHeight?: number;
	isMobile: boolean;
	itemColor: string;
	activeItemColor: string;
	drawerActiveItemColor: string;
	drawerImagePosition: 'left' | 'center' | 'right';
	drawerItemPosition: 'start' | 'center' | 'end';
};
export const MobileNavDrawer = ({
	logoHref,
	navItems,
	openMobileDrawer,
	setOpenMobileDrawer,
	drawerLogoHref,
	logoWidth,
	logoHeight,
	drawerLogoWidth,
	drawerLogoHeight,
	isMobile,
	itemColor,
	activeItemColor,
	drawerActiveItemColor,
	drawerImagePosition,
	drawerItemPosition,
}: MobileNavDrawerProps) => {
	if (!isMobile) return null;
	return (
		<Drawer
			variant="temporary"
			open={openMobileDrawer}
			onClose={() => setOpenMobileDrawer(!openMobileDrawer)}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
			sx={{
				'& .MuiDrawer-paper': { width: 240 },
			}}
		>
			<Box onClick={() => setOpenMobileDrawer(!openMobileDrawer)} sx={{ textAlign: 'center' }}>
				<NavLogo
					href={drawerLogoHref ?? logoHref}
					isMobile={true}
					width={logoWidth ?? drawerLogoWidth ?? 50}
					height={logoHeight ?? drawerLogoHeight ?? 50}
					itemPosition="center"
					drawerImagePosition={drawerImagePosition}
				/>

				<NavMobileItems
					navItems={navItems}
					itemColor={itemColor}
					activeItemColor={activeItemColor}
					drawerActiveItemColor={drawerActiveItemColor}
					drawerItemPosition={drawerItemPosition}
				/>
			</Box>
		</Drawer>
	);
};
