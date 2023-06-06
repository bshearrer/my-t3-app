import { useUser } from '@clerk/nextjs';
import { Box, ListItem, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { checkUserRole } from 'src/utils/clientAuthUtil';
import { type SideNavItemType } from '../SideNav';

type SideNavItemProps = {
	open: boolean;
	item: SideNavItemType;
	textColor: string;
	hoverColor: string;
};
export const SideNavItem = ({ open, item, textColor, hoverColor }: SideNavItemProps): JSX.Element => {
	const { pathname } = useRouter();
	const { user, isLoaded } = useUser();

	if (item.privatePage && !user) return <></>;

	const userHasRole = item.role && isLoaded ? checkUserRole(user, item.role) : true;
	if (item.role && (!isLoaded || !userHasRole)) return <></>;

	return (
		<Link href={item.href}>
			<ListItem
				sx={{
					display: 'flex',
					alignItems: 'flex-start',
					color: textColor,
					bgcolor: pathname.includes(item.href) ? hoverColor : 'transparent',
					'&:hover': {
						bgcolor: hoverColor,
					},
				}}
			>
				<Stack direction={'row'} spacing={2} alignItems={'center'}>
					<Box ml={1}>{item.icon}</Box>
					{open && <Typography noWrap>{item.text}</Typography>}
				</Stack>
			</ListItem>
		</Link>
	);
};
