import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Card, CardContent, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormTextField } from 'src/components/layout/form-inputs/FormTextField';
import { useAlert } from 'src/hooks/useAlert';
import { z } from 'zod';

const validationSchema = z.object({
	address: z.string().nonempty('Address is required'),
});

type FormData = z.infer<typeof validationSchema>;

export default function AddLocation() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(validationSchema),
		defaultValues: {
			address: '',
		},
	});

	const alert = useAlert();
	const onSubmit = (data: FormData) => {
		alert.addAlert({
			message: `${data.address} added successfully!`,
			severity: 'success',
		});
	};

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
						<FormTextField control={control} name="address" label="Address" />
						<Button type="submit" disabled={isSubmitting} onClick={(e) => void handleSubmit(onSubmit)(e)}>
							Submit
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
}
