import { Box, Card, CardContent, Stack } from '@mui/material';
import { AddLocationForm } from 'src/components/location/AddLocationForm';

export default function AddLocation() {
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
					<Stack height={'100%'} justifyContent={'center'} alignItems={'center'} spacing={2}>
						<AddLocationForm />
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
}
