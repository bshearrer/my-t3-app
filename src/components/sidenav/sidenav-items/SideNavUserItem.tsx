import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Button, ListItem } from '@mui/material';

type SideNavUserItemProps = {
	textColor: string;
};
export const SideNavUserItem = ({ textColor }: SideNavUserItemProps) => {
	return (
		<ListItem
			sx={{
				mt: 'auto',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<SignedIn>
				<UserButton afterSignOutUrl="/" />
			</SignedIn>
			<SignedOut>
				<Box>
					<SignInButton mode="modal">
						<Button variant="outlined" sx={{ p: 0, color: textColor }}>
							Log In
						</Button>
					</SignInButton>
				</Box>
			</SignedOut>
		</ListItem>
	);
};
