import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useState } from 'react';
import { UserRoles } from 'src/types/types';
import { SideNavItem } from './sidenav-items/SideNavItem';
import { SideNavLogo } from './sidenav-items/SideNavLogo';
import { SideNavToggleButton } from './sidenav-items/SideNavToggleButton';
import { SideNavUserItem } from './sidenav-items/SideNavUserItem';
import { SideNav, SideNavList } from './sidenav-items/sidenav-styled-components';
import { TEXT_COLOR, type DrawerItemType } from './util/sidenav-util';

export const SideNavDrawer = () => {
	const [open, setOpen] = useState(false);

	const drawerItems: DrawerItemType[] = [
		{
			href: '/location/add',
			icon: <AddLocationAltIcon />,
			text: 'Add Location',
		},
		{
			href: '/admin',
			icon: <AdminPanelSettingsIcon />,
			text: 'Admin Settings',
			role: UserRoles.ADMIN,
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
				<SideNavUserItem textColor={TEXT_COLOR} open={open} />
			</SideNavList>
		</SideNav>
	);
};
