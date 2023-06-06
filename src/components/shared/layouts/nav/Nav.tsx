import { AppBar, Toolbar } from '@mui/material';
import { NavItems } from './nav-items/NavItems';
import { NavLogo } from './nav-items/NavLogo';
import { NavUserItem } from './nav-items/NavUserItem';
import { type NavItemType } from './util/NavUtil';

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
