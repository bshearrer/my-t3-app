import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';
import { Drawer, List } from '@mui/material';
import { useState } from 'react';
import { SideNavDrawerItem } from './SideNavDrawerItem';
import { SideNavLogo } from './SideNavLogo';
import { SideNavToggleButton } from './SideNavToggleButton';
import { SideNavUserItem } from './SideNavUserItem';
import {
	CLOSED_DRAWER_WIDTH,
	HOVER_COLOR,
	OPEN_DRAWER_WIDTH,
	TEXT_COLOR,
	type DrawerItemType,
} from './util/sidenav-util';

export const SideNavDrawer = () => {
	const [open, setOpen] = useState(false);

	const drawerItems: DrawerItemType[] = [
		{
			href: '/admin',
			icon: <AdminPanelSettingsIcon />,
			text: 'Admin Settings',
		},
		{
			href: '/users',
			icon: <PeopleIcon />,
			text: 'Users',
		},
	];

	return (
		<Drawer
			open={open}
			variant="permanent"
			sx={{
				width: open ? OPEN_DRAWER_WIDTH : CLOSED_DRAWER_WIDTH,
				transition: 'width 0.3s',
				'& .MuiDrawer-paper': {
					width: open ? OPEN_DRAWER_WIDTH : CLOSED_DRAWER_WIDTH,
					transition: 'width 0.3s',
				},
			}}
		>
			<List
				sx={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<SideNavLogo />
				<SideNavToggleButton
					open={open}
					setOpen={setOpen}
					textColor={TEXT_COLOR}
				/>
				{drawerItems.map((item) => (
					<SideNavDrawerItem
						key={item.href}
						href={item.href}
						open={open}
						icon={item.icon}
						text={item.text}
						textColor={TEXT_COLOR}
						hoverColor={HOVER_COLOR}
					/>
				))}
				<SideNavUserItem textColor={TEXT_COLOR} />
			</List>
		</Drawer>
	);
};
