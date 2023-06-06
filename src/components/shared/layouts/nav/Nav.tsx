import { AppBar, Toolbar } from '@mui/material';
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
	itemsPosition?: 'center' | 'right';
	itemColor?: string;
	activeItemColor?: string;
};
export const Nav = ({
	logoHref,
	navItems,
	navPosition,
	navBackgroundColor,
	itemsPosition,
	itemColor,
	activeItemColor,
}: NavProps) => {
	return (
		<AppBar position={navPosition ?? 'static'} component={'nav'} sx={{ bgcolor: navBackgroundColor }}>
			<Toolbar>
				<NavLogo href={logoHref} />

				<NavItems
					navItems={navItems}
					alignment={itemsPosition ?? 'right'}
					itemColor={itemColor ?? ''}
					activeItemColor={activeItemColor ?? ''}
				/>

				<NavUserItem />
			</Toolbar>
		</AppBar>
	);
};
