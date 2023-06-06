import { useUser } from '@clerk/nextjs';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from 'src/styles/theme';
import { checkUserRole } from 'src/utils/clientAuthUtil';
import { type NavItemType } from '../Nav';

type NavMobileItemProps = {
	item: NavItemType;
	itemColor: string;
	activeItemColor: string;
	drawerActiveItemColor: string;
};
export const NavMobileItem = ({ item, itemColor, activeItemColor, drawerActiveItemColor }: NavMobileItemProps) => {
	const { pathname } = useRouter();
	const { user, isLoaded } = useUser();

	if (item.privatePage && !user) return <></>;

	const userHasRole = item.role ? checkUserRole(user, item.role) : true;

	if (item.role && (!isLoaded || !userHasRole)) return <></>;

	const activePage = pathname.includes(item.href);

	return (
		<Link href={item.href}>
			<ListItem disablePadding sx={{ color: itemColor ?? 'inherit' }}>
				<ListItemButton sx={{ textAlign: 'left' }}>
					<ListItemIcon
						sx={{
							color: activePage
								? drawerActiveItemColor ?? activeItemColor
									? drawerActiveItemColor ?? activeItemColor
									: theme.palette.secondary.main
								: itemColor ?? 'inherit',
						}}
					>
						{item.icon}
					</ListItemIcon>
					<ListItemText
						primary={item.text}
						sx={{
							color: activePage
								? drawerActiveItemColor ?? activeItemColor
									? drawerActiveItemColor ?? activeItemColor
									: theme.palette.secondary.main
								: itemColor ?? 'inherit',
						}}
					/>
				</ListItemButton>
			</ListItem>
		</Link>
	);
};
