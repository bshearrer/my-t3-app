import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
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
		console.log(data);
		alert.addAlert({
			message: 'Location added successfully',
			severity: 'success',
		});
	};

	return (
		<form onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
			<FormTextField control={control} name="address" label="Address" />
			<Button type="submit" disabled={isSubmitting}>
				Submit
			</Button>
		</form>
	);
}
