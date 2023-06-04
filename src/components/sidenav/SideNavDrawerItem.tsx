import { useUser } from '@clerk/nextjs';
import { Box, ListItem, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { checkUserRole } from 'src/utils/clientAuthUtil';

type SideNavDrawerItemProps = {
	href: string;
	open: boolean;
	icon: React.ReactNode;
	text: string;
	textColor: string;
	hoverColor: string;
	role?: string;
};
export const SideNavDrawerItem = ({
	href,
	open,
	icon,
	text,
	textColor,
	hoverColor,
	role,
}: SideNavDrawerItemProps): JSX.Element => {
	const { pathname } = useRouter();
	const { user, isLoaded } = useUser();

	if (role && user && isLoaded) {
		const hasRole = checkUserRole(user, role);

		if (!hasRole) {
			return <></>;
		}
	}

	return (
		<Link href={href}>
			<ListItem
				sx={{
					display: 'flex',
					alignItems: 'flex-start',
					color: textColor,
					bgcolor: pathname.includes(href)
						? hoverColor
						: 'transparent',
					'&:hover': {
						bgcolor: hoverColor,
					},
				}}
			>
				<Stack direction={'row'} spacing={2}>
					<Box ml={1}>{icon}</Box>
					{open && <Typography noWrap>{text}</Typography>}
				</Stack>
			</ListItem>
		</Link>
	);
};
