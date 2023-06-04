import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';
import { useState } from 'react';
import { SideNavToggleButton } from './/sidenav-items/SideNavToggleButton';
import { SideNavItem } from './sidenav-items/SideNavItem';
import { SideNavLogo } from './sidenav-items/SideNavLogo';
import { SideNavUserItem } from './sidenav-items/SideNavUserItem';
import { SideNav, SideNavList } from './util/sidenav-styled-components';
import { TEXT_COLOR, type DrawerItemType } from './util/sidenav-util';

export const SideNavDrawer = () => {
	const [open, setOpen] = useState(false);

	const drawerItems: DrawerItemType[] = [
		{
			href: '/users',
			icon: <PeopleIcon />,
			text: 'Users',
		},
		{
			href: '/admin',
			icon: <AdminPanelSettingsIcon />,
			text: 'Admin Settings',
			role: 'admin',
		},
	];

	return (
		<SideNav open={open} variant="permanent">
			<SideNavList>
				<SideNavLogo />
				<SideNavToggleButton open={open} setOpen={setOpen} textColor={TEXT_COLOR} />
				{drawerItems.map((item) => (
					<SideNavItem key={item.href} {...item} open={open} />
				))}
				<SideNavUserItem textColor={TEXT_COLOR} />
			</SideNavList>
		</SideNav>
	);
};