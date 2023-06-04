import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';
import { Drawer, List } from '@mui/material';
import { useState } from 'react';
import theme from 'src/styles/theme';
import { SideNavDrawerItem } from './SidenavDrawerItem';
import { SideNavToggleButton } from './SidenavToggleButton';

type DrawerItemType = {
	href: string;
	icon: React.ReactNode;
	text: string;
};

const TEXT_COLOR = theme.palette.primary.main;
const HOVER_COLOR = '#f5f5f5';
const CLOSED_DRAWER_WIDTH = 60;
const OPEN_DRAWER_WIDTH = 220;

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
			<List>
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
			</List>
		</Drawer>
	);
};
