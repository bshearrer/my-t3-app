import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Skeleton, Typography } from '@mui/material';
import { api } from 'src/utils/api';

export const CenterCardActionLayoutContent = () => {
	const { data, isLoading } = api.example.greeting.useQuery({
		text: 'user',
	});

	if (isLoading) {
		return (
			<>
				<Skeleton sx={{ width: '50%', height: '45px' }} />
				<Skeleton sx={{ width: '15%', height: '45px' }} />
			</>
		);
	}

	return (
		<>
			<SignedIn>
				<Typography variant="h6">{data?.greeting}</Typography>
			</SignedIn>
			<SignedOut>
				<Typography variant="h6">Hello, world</Typography>
			</SignedOut>
		</>
	);
};
