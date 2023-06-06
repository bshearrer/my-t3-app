import { List } from '@mui/material';
import { type NavItemType } from '../Nav';
import { NavMobileItem } from './NavMobileItem';

type NavMobileItemsProps = {
	navItems: NavItemType[];
	itemColor: string;
	activeItemColor: string;
	drawerActiveItemColor: string;
	drawerItemPosition: 'start' | 'center' | 'end';
};

export const NavMobileItems = ({
	navItems,
	itemColor,
	drawerActiveItemColor,
	activeItemColor,
	drawerItemPosition,
}: NavMobileItemsProps) => {
	return (
		<List>
			{navItems.map((item) => (
				<NavMobileItem
					key={item.href}
					item={item}
					itemColor={itemColor}
					activeItemColor={activeItemColor}
					drawerActiveItemColor={drawerActiveItemColor}
					drawerItemPosition={drawerItemPosition}
				/>
			))}
		</List>
	);
};
