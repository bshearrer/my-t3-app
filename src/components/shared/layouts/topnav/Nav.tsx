import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import theme from 'src/styles/theme';
import { MobileNavDrawer } from './mobile-nav-items/NavMobileDrawer';
import { NavItems } from './nav-items/NavItems';
import { NavLogo } from './nav-items/NavLogo';
import { NavUserItem } from './nav-items/NavUserItem';

type BaseNavItemType = {
	href: string;
	privatePage?: boolean;
	role?: string;
};

type NavItemWithText = BaseNavItemType & {
	text: string;
	icon?: JSX.Element;
};

type NavItemWithIcon = BaseNavItemType & {
	text?: string;
	icon: JSX.Element;
};

export type NavItemType = NavItemWithText | NavItemWithIcon;

type NavProps = {
	logoHref: string;
	navItems: NavItemType[];
	navPosition?: 'static' | 'fixed' | 'absolute' | 'sticky' | 'relative';
	navBackgroundColor?: string;
	itemsPosition?: 'left' | 'center' | 'right';
	itemColor?: string;
	activeItemColor?: string;
	logoWidth?: number;
	logoHeight?: number;
	drawerLogoHref?: string;
	drawerLogoWidth?: number;
	drawerLogoHeight?: number;
	drawerItemColor?: string;
	drawerActiveItemColor?: string;
	drawerImagePosition?: 'left' | 'center' | 'right';
	drawerItemPosition?: 'start' | 'center' | 'end';
};
export const TopNav = ({
	logoHref,
	navItems,
	navPosition,
	navBackgroundColor,
	itemsPosition,
	itemColor,
	activeItemColor,
	drawerLogoHref,
	logoWidth,
	logoHeight,
	drawerLogoWidth,
	drawerLogoHeight,
	drawerItemColor,
	drawerActiveItemColor,
	drawerImagePosition,
	drawerItemPosition,
}: NavProps) => {
	const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box component={'nav'}>
			<AppBar position={navPosition ?? 'static'} component={'nav'} sx={{ bgcolor: navBackgroundColor }}>
				<Toolbar>
					<NavLogo
						href={logoHref}
						width={logoWidth ?? 50}
						height={logoHeight ?? 50}
						itemPosition={itemsPosition ?? 'right'}
						drawerImagePosition={'center'}
					/>

					<Box flexGrow={itemsPosition == 'left' || itemsPosition == 'center' ? 1 : 0}>
						<NavItems
							navItems={navItems}
							alignment={itemsPosition ?? 'right'}
							itemColor={itemColor ?? ''}
							activeItemColor={activeItemColor ?? ''}
							isMobile={isMobile}
							setOpenMobileDrawer={setOpenMobileDrawer}
							openMobileDrawer={openMobileDrawer}
						/>
					</Box>

					<NavUserItem />
				</Toolbar>
			</AppBar>
			<MobileNavDrawer
				isMobile={isMobile}
				openMobileDrawer={openMobileDrawer}
				setOpenMobileDrawer={setOpenMobileDrawer}
				logoHref={logoHref}
				navItems={navItems}
				drawerLogoHref={drawerLogoHref}
				logoWidth={logoWidth}
				logoHeight={logoHeight}
				drawerLogoWidth={drawerLogoWidth}
				drawerLogoHeight={drawerLogoHeight}
				itemColor={drawerItemColor ?? itemColor ?? ''}
				activeItemColor={activeItemColor ?? ''}
				drawerActiveItemColor={drawerActiveItemColor ?? ''}
				drawerImagePosition={drawerImagePosition ?? 'center'}
				drawerItemPosition={drawerItemPosition ?? 'start'}
			/>
		</Box>
	);
};
