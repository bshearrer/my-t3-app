import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Button, ListItem, Stack, Typography } from '@mui/material';

type SideNavUserItemProps = {
	textColor: string;
	open: boolean;
};
export const SideNavUserItem = ({ textColor, open }: SideNavUserItemProps) => {
	return (
		<>
			<SignedIn>
				<ListItem
					sx={{
						mt: 'auto',
						display: 'flex',
						alignItems: 'flex-start',
					}}
				>
					<Stack direction={'row'} spacing={2} alignItems={'center'}>
						<UserButton afterSignOutUrl="/" /> {open ? <Typography noWrap>Profile</Typography> : ''}
					</Stack>
				</ListItem>
			</SignedIn>
			<SignedOut>
				<ListItem
					sx={{
						mt: 'auto',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Box>
						<SignInButton mode="modal">
							<Button variant="outlined" sx={{ p: 0, color: textColor, ml: -1.4 }}>
								Log In
							</Button>
						</SignInButton>
					</Box>
				</ListItem>
			</SignedOut>
		</>
	);
};
