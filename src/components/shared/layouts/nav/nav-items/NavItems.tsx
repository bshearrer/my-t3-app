import { Box, Stack } from '@mui/material';
import { type NavItemType } from '../Nav';
import { NavItem } from './NavItem';

type NavItemsProps = {
	navItems: NavItemType[];
	alignment: 'center' | 'right';
	itemColor: string;
	activeItemColor: string;
};

export const NavItems = ({ navItems, alignment, itemColor, activeItemColor }: NavItemsProps) => {
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
