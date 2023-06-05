import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Button, ListItem, Stack, Typography } from '@mui/material';

type SideNavUserItemProps = {
	textColor: string;
	open: boolean;
};
export const SideNavUserItem = ({ textColor, open }: SideNavUserItemProps) => {
	return (
		<ListItem
			sx={{
				mt: 'auto',
				display: 'flex',
				alignItems: 'flex-start',
			}}
		>
			<SignedIn>
				<Stack direction={'row'} spacing={2} alignItems={'center'}>
					<UserButton afterSignOutUrl="/" /> {open ? <Typography noWrap>Profile</Typography> : ''}
				</Stack>
			</SignedIn>
			<SignedOut>
				<Box>
					<SignInButton mode="modal">
						<Button variant="outlined" sx={{ p: 0, color: textColor, ml: -1.4 }}>
							Log In
						</Button>
					</SignInButton>
				</Box>
			</SignedOut>
		</ListItem>
	);
};
