import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormSelect } from '../shared/form-inputs/FormSelect';
import { FormTextField } from '../shared/form-inputs/FormTextField';
import { LoadingButton } from '../shared/loading/LoadingButton';

const validationSchema = z.object({
	name: z.string().nonempty('Name is required'),
	contactMethod: z.string().nonempty('Contact method is required'),
});

export type FormExampleFormData = z.infer<typeof validationSchema>;

export const FormExample = (props: { defaultValues: FormExampleFormData }) => {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormExampleFormData>({
		resolver: zodResolver(validationSchema),
		defaultValues: props.defaultValues,
	});

	const onSubmit = (data: FormExampleFormData) => {
		console.log(data);
	};

	return (
		<Stack spacing={2}>
			<h1>Form Example</h1>
			<FormTextField control={control} name="name" label="Name" required />
			<FormSelect
				options={[
					{ value: 'email', label: 'Email' },
					{ value: 'phone', label: 'Phone' },
					{ value: 'text', label: 'Text' },
				]}
				control={control}
				name="contactMethod"
				label="Preferred Contact Method"
				required
			/>

			<LoadingButton
				disabled={isSubmitting}
				onClick={(e) => void handleSubmit(onSubmit)(e)}
				variant="contained"
				label="Submit"
				isLoading={isSubmitting}
			/>
		</Stack>
	);
};
