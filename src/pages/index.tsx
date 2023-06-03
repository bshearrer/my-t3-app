import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Skeleton,
	Typography,
} from '@mui/material';
import { type NextPage } from 'next';
import { api } from 'src/utils/api';

const Home: NextPage = () => {
	const { data, isLoading } = api.example.greeting.useQuery({
		text: 'from tRPC',
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
					display: 'flex',
					textAlign: 'center',
				}}
			>
				<CardActionArea>
					<CardContent>
						<Typography>
							{isLoading ? (
								<Skeleton sx={{ height: '50px' }} />
							) : (
								data?.greeting
							)}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default Home;
