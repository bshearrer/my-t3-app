import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Box } from '@mui/material';
import { type PropsWithChildren } from 'react';
import { UserRoles } from 'src/types/types';
import { type NavItemType } from './nav/Nav';
import { SideNav, type SideNavItemType } from './sidenav/SideNav';

export const GlobalLayout = ({ children }: PropsWithChildren) => {
	const navItems: NavItemType[] = [
		{
			href: 'https://gitwit.com',
			text: 'Gitwit',
		},
		{
			href: '/location/add',
			icon: <AddLocationAltIcon />,
			text: 'Add Location',
			privatePage: true,
		},
		{
			href: '/admin',
			icon: <AdminPanelSettingsIcon />,
			text: 'Admin Settings',
			role: UserRoles.ADMIN,
		},
	];

	const sideNavItems: SideNavItemType[] = [
		{
			href: '/location/add',
			icon: <AddLocationAltIcon />,
			text: 'Add Location',
			privatePage: true,
		},
		{
			href: '/admin',
			icon: <AdminPanelSettingsIcon />,
			text: 'Admin Settings',
			role: UserRoles.ADMIN,
		},
	];

	// return (
	// 	<>
	// 		<Nav navItems={navItems} logoHref="/gitwit-long.svg" logoWidth={100} />
	// 		{children}
	// 	</>
	// );

	return (
		<Box display={'flex'}>
			<SideNav logoSrc="/gitwit-logo-midnight.svg" sideNavItems={sideNavItems} />
			{children}
		</Box>
	);
};
