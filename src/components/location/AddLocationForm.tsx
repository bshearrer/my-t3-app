import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAlert } from 'src/hooks/useAlert';
import { api } from 'src/utils/api';
import { z } from 'zod';
import { FormTextField } from '../shared/form-inputs/FormTextField';

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
				alert.addAlert({
					message: `${data.address} added successfully!`,
					severity: 'success',
				});
			},
		});
	};

	return (
		<>
			<FormTextField control={control} name="address" label="Address" required />
			<Button type="submit" disabled={isSubmitting || isLoading} onClick={(e) => void handleSubmit(onSubmit)(e)}>
				Submit
			</Button>
		</>
	);
};
