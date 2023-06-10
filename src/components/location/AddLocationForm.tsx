import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAlert } from 'src/hooks/useAlert';
import { api } from 'src/utils/api';
import { z } from 'zod';
import { FormTextField } from '../shared/form-inputs/FormTextField';
import { LoadingButton } from '../shared/loading/LoadingButton';

const validationSchema = z.object({
	address: z.string().nonempty('Address is required'),
});

type FormData = z.infer<typeof validationSchema>;

export const AddLocationForm = () => {
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
	const { mutate, isLoading } = api.locations.addLocation.useMutation();

	const onSubmit = (data: FormData) => {
		mutate(data.address, {
			onSuccess: () => {
				alert.addSuccessAlert('Location added successfully');
			},
		});
	};

	return (
		<>
			<FormTextField control={control} name="address" label="Address" required />
			<Stack direction="row" spacing={2}>
				<LoadingButton
					type="submit"
					disabled={isSubmitting || isLoading}
					onClick={(e) => void handleSubmit(onSubmit)(e)}
					variant="contained"
					label="Submit"
					isLoading={isSubmitting || isLoading}
				/>
			</Stack>
		</>
	);
};
