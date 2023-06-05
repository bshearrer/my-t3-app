import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { AppBar, Box, Icon, List, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { UserRoles } from 'src/types/types';

export const Nav = () => {
	const navItems = [
		{
			href: '/',
			text: 'Home',
		},
		{
			href: '/location/add',
			icon: <AddLocationAltIcon />,
			text: 'Add Location',
		},
		{
			href: '/admin',
			icon: <AdminPanelSettingsIcon />,
			text: 'Admin Settings',
			role: UserRoles.ADMIN, //make this work
		},
	];
	return (
		<AppBar position="static">
			<Toolbar>
				<List sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
					<ListItem>
						<Box>
							<Link href="/">
								<Image src="/gitwit.svg" alt="Gitwit" width={50} height={50} priority />
							</Link>
						</Box>
					</ListItem>
					<Stack sx={{ ml: 'auto' }} direction={'row'} alignItems={'center'}>
						{navItems.map((item) => (
							<Link key={item.href} href={item.href}>
								<ListItem>
									<Typography noWrap>
										{/* make this align vertically together */}
										<Icon>{item.icon}</Icon>
										{item.text}
									</Typography>
								</ListItem>
							</Link>
						))}
					</Stack>
				</List>
			</Toolbar>
		</AppBar>
	);
};
