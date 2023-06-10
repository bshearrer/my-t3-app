import { Box, Card, CardContent, Stack } from '@mui/material';
import { type PropsWithChildren } from 'react';

export const CenterCardLayout = ({ children }: PropsWithChildren) => {
	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			height={'100vh'}
			width={'100vw'}
		>
			<Card
				sx={{
					width: '50%',
					height: '30%',
				}}
			>
				<CardContent sx={{ height: '100%' }}>
					<Stack height={'100%'} justifyContent={'center'} alignItems={'center'} spacing={2} width={'100%'}>
						{children}
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
};
