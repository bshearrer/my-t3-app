import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { type NavItemType } from '../Nav';
import { NavLogo } from '../nav-items/NavLogo';

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
				/>

				<List>
					{navItems.map((item) => (
						<Link href={item.href} key={item.href}>
							<ListItem disablePadding sx={{ color: itemColor ?? 'inherit' }}>
								<ListItemButton sx={{ textAlign: 'left' }}>
									<ListItemIcon sx={{ color: itemColor ?? 'inherit' }}>{item.icon}</ListItemIcon>
									<ListItemText primary={item.text} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
			</Box>
		</Drawer>
	);
};
