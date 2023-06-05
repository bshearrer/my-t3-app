import { useUser } from '@clerk/nextjs';
import { Box, ListItem, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { checkUserRole } from 'src/utils/clientAuthUtil';
import { HOVER_COLOR, TEXT_COLOR } from '../util/sidenav-util';

type SideNavItemProps = {
	href: string;
	open: boolean;
	icon: React.ReactNode;
	text: string;
	role?: string;
};
export const SideNavItem = ({ href, open, icon, text, role }: SideNavItemProps): JSX.Element => {
	const { pathname } = useRouter();
	const { user, isLoaded } = useUser();

	const userHasRole = role && isLoaded ? checkUserRole(user, role) : true;
	if (role && (!isLoaded || !userHasRole)) return <></>;

	return (
		<Link href={href}>
			<ListItem
				sx={{
					display: 'flex',
					alignItems: 'flex-start',
					color: TEXT_COLOR,
					bgcolor: pathname.includes(href) ? HOVER_COLOR : 'transparent',
					'&:hover': {
						bgcolor: HOVER_COLOR,
					},
				}}
			>
				<Stack direction={'row'} spacing={2} alignItems={'center'}>
					<Box ml={1}>{icon}</Box>
					{open && <Typography noWrap>{text}</Typography>}
				</Stack>
			</ListItem>
		</Link>
	);
};
