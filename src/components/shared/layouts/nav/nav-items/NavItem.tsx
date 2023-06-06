import { useUser } from '@clerk/nextjs';
import { Button, IconButton } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from 'src/styles/theme';
import { checkUserRole } from 'src/utils/clientAuthUtil';
import { type NavItemType } from '../Nav';

type NavItemProps = {
	item: NavItemType;
	activeItemColor: string;
};
export const NavItem = ({ item, activeItemColor }: NavItemProps) => {
	const { pathname } = useRouter();
	const { user, isLoaded } = useUser();

	if (item.privatePage && !user) return <></>;

	const userHasRole = item.role ? checkUserRole(user, item.role) : true;

	if (item.role && (!isLoaded || !userHasRole)) return <></>;

	const activePage = pathname.includes(item.href);

	return (
		<Link href={item.href}>
			{item.text ? (
				<Button
					sx={{
						color: activePage
							? activeItemColor
								? activeItemColor
								: theme.palette.secondary.main
							: 'inherit',
					}}
				>
					{item.text}
				</Button>
			) : (
				<IconButton
					sx={{
						color: activePage
							? activeItemColor
								? activeItemColor
								: theme.palette.secondary.main
							: 'inherit',
					}}
				>
					{item.icon}
				</IconButton>
			)}
		</Link>
	);
};
