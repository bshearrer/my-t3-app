import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import {
	Box,
	Card,
	CardContent,
	Skeleton,
	Stack,
	Typography,
} from '@mui/material';
import { type NextPage } from 'next';
import { api } from 'src/utils/api';

const Home: NextPage = () => {
	const { data, isLoading } = api.example.greeting.useQuery({
		text: 'world',
	});

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			height={'100vh'}
			width={'100vw'}
			bgcolor={'#f5f5f5'}
		>
			<Card
				sx={{
					width: '50%',
					height: '30%',
				}}
			>
				<CardContent sx={{ height: '100%' }}>
					<Stack
						height={'100%'}
						justifyContent={'center'}
						alignItems={'center'}
						spacing={2}
					>
						{isLoading ? (
							<>
								<Skeleton
									sx={{ width: '50%', height: '45px' }}
								/>
								<Skeleton
									sx={{ width: '15%', height: '45px' }}
								/>
							</>
						) : (
							<>
								<Typography>{data?.greeting}</Typography>
								<SignedIn>
									<UserButton afterSignOutUrl="/" />
								</SignedIn>
								<SignedOut>
									<SignInButton />
								</SignedOut>
							</>
						)}
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Home;
