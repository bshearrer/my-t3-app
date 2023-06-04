import { ListItem, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type SideNavDrawerItemProps = {
	href: string;
	open: boolean;
	icon: React.ReactNode;
	text: string;
	textColor: string;
	hoverColor: string;
};
export const SideNavDrawerItem = ({
	href,
	open,
	icon,
	text,
	textColor,
	hoverColor,
}: SideNavDrawerItemProps): JSX.Element => {
	const { pathname } = useRouter();

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
					{icon}
					{open && <Typography noWrap>{text}</Typography>}
				</Stack>
			</ListItem>
		</Link>
	);
};
