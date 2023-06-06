import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { type PropsWithChildren } from 'react';
import { UserRoles } from 'src/types/types';
import { Nav, type NavItemType } from './nav/Nav';

export const GlobalLayout = ({ children }: PropsWithChildren) => {
	const navItems: NavItemType[] = [
		{
			href: 'https://www.gitwit.com',
			text: 'Gitwit.com',
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

	return (
		<>
			<Nav logoHref="/gitwit.svg" navItems={navItems} />
			{children}
		</>
	);
	// return (
	// 	<Box display={'flex'}>
	// 		<SideNav />
	// 		{children}
	// 	</Box>
	// );
};
