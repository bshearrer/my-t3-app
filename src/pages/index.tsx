import { SignedIn, SignedOut } from '@clerk/nextjs';
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Skeleton,
	Stack,
	Typography,
} from '@mui/material';
import { type NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from 'src/utils/api';

const Home: NextPage = () => {
	const router = useRouter();
	const [openDialog, setOpenDialog] = useState(false);
	const { data, isLoading } = api.example.greeting.useQuery({
		text: 'user',
	});

	const handleCloseDialog = (): void => {
		void router.push('/', undefined, { shallow: true });
	};

	useEffect(() => {
		if (router.query.modal === 'true') {
			setOpenDialog(true);
		} else {
			setOpenDialog(false);
		}
	}, [router.query]);

	return (
		<>
			<Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
				<DialogTitle>Dialog Title</DialogTitle>
				<DialogContent>
					<DialogContentText>Dialog Content</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog} variant="contained">
						Foo
					</Button>
					<Button onClick={handleCloseDialog} variant="outlined">
						Bar
					</Button>
				</DialogActions>
			</Dialog>
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
					<CardActionArea
						sx={{ height: '100%' }}
						onClick={() => void router.push('/?modal=true', undefined, { shallow: true })}
					>
						<CardContent>
							<Stack height={'100%'} justifyContent={'center'} alignItems={'center'} spacing={2}>
								{isLoading ? (
									<>
										<Skeleton sx={{ width: '50%', height: '45px' }} />
										<Skeleton sx={{ width: '15%', height: '45px' }} />
									</>
								) : (
									<>
										<SignedIn>
											<Typography variant="h6">{data?.greeting}</Typography>
										</SignedIn>
										<SignedOut>
											<Typography variant="h6">Hello, world</Typography>
										</SignedOut>
									</>
								)}
							</Stack>
						</CardContent>
					</CardActionArea>
				</Card>
			</Box>
		</>
	);
};

export default Home;
