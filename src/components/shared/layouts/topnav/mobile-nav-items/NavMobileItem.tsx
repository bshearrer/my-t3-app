import { useUser } from '@clerk/nextjs';
import { Button, ListItem } from '@mui/material';
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
	drawerItemPosition: 'start' | 'center' | 'end';
};
export const NavMobileItem = ({
	item,
	itemColor,
	activeItemColor,
	drawerActiveItemColor,
	drawerItemPosition,
}: NavMobileItemProps) => {
	const { pathname } = useRouter();
	const { user, isLoaded } = useUser();

	if (item.privatePage && !user) return <></>;

	const userHasRole = item.role ? checkUserRole(user, item.role) : true;

	if (item.role && (!isLoaded || !userHasRole)) return <></>;

	const activePage = pathname.includes(item.href);

	return (
		<Link href={item.href}>
			<ListItem disablePadding sx={{ display: 'flex', justifyContent: drawerItemPosition, px: 1 }}>
				<Button
					startIcon={item.icon}
					sx={{
						color: activePage
							? drawerActiveItemColor ?? activeItemColor
								? drawerActiveItemColor ?? activeItemColor
								: theme.palette.secondary.main
							: itemColor ?? 'inherit',
					}}
				>
					{item.text}
				</Button>
			</ListItem>
		</Link>
	);
};
