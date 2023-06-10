import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { type PropsWithChildren } from 'react';
import { UserRole } from 'src/types/types';
import { TopNav, type NavItemType } from './topnav/Nav';

export const GlobalLayout = ({ children }: PropsWithChildren) => {
	const navItems: NavItemType[] = [
		{
			href: '/form',
			text: 'Form',
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
			role: UserRole.ADMIN,
		},
	];

	return (
		<>
			<TopNav navItems={navItems} logoSrc="/gitwit-long.svg" logoWidth={100} />
			{children}
		</>
	);

	// const sideNavItems: SideNavItemType[] = [
	// 	{
	// 		href: '/location/add',
	// 		icon: <AddLocationAltIcon />,
	// 		text: 'Add Location',
	// 		privatePage: true,
	// 	},
	// 	{
	// 		href: '/admin',
	// 		icon: <AdminPanelSettingsIcon />,
	// 		text: 'Admin Settings',
	// 		role: UserRole.ADMIN,
	// 	},
	// ];

	// return (
	// 	<Box display={'flex'}>
	// 		<SideNav logoSrc="/gitwit-logo-midnight.svg" sideNavItems={sideNavItems} />
	// 		{children}
	// 	</Box>
	// );
};
