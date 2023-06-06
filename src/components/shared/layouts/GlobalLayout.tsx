import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { type PropsWithChildren } from 'react';
import { UserRoles } from 'src/types/types';
import { Nav } from './nav/Nav';
import { type NavItemType } from './nav/util/NavUtil';

export const GlobalLayout = ({ children }: PropsWithChildren) => {
	const navItems: NavItemType[] = [
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
