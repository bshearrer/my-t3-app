import { Box, Card, CardActionArea, CardContent, Stack } from '@mui/material';
import router from 'next/router';
import { type PropsWithChildren } from 'react';

export const CenterCardActionLayout = ({ children }: PropsWithChildren) => {
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
				<CardActionArea
					sx={{ height: '100%' }}
					onClick={() => void router.push('/?modal=true', undefined, { shallow: true })}
				>
					<CardContent>
						<Stack height={'100%'} justifyContent={'center'} alignItems={'center'} spacing={2}>
							{children}
						</Stack>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};
