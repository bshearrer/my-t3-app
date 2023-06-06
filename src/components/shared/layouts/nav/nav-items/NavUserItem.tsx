import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Button } from '@mui/material';

export const NavUserItem = () => {
	return (
		<Box ml={1}>
			<SignedOut>
				<SignInButton mode="modal">
					<Button variant="outlined" color="inherit">
						Login
					</Button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton afterSignOutUrl="/" />
			</SignedIn>
		</Box>
	);
};
