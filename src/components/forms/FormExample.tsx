import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormDateField } from '../shared/form-inputs/FormDateField';
import { FormRadioButton } from '../shared/form-inputs/FormRadioButton';
import { FormSelect } from '../shared/form-inputs/FormSelect';
import { FormSelectChips } from '../shared/form-inputs/FormSelectChips';
import { FormTextField } from '../shared/form-inputs/FormTextField';
import { LoadingButton } from '../shared/loading/LoadingButton';

const validationSchema = z.object({
	name: z.string().nonempty('Name is required'),
	contactMethod: z.string().nonempty('Contact method is required'),
	isSubscribed: z.string().nonempty('Subscription is required'),
	operatingSystems: z.array(z.string()).nonempty('Operating system is required'),
	date: z.date(),
});

export type FormExampleFormData = {
	name: string;
	contactMethod: string;
	isSubscribed: string;
	operatingSystems: string[];
	date: string;
};

const contactMethodOptions = [
	{ value: 'email', label: 'Email' },
	{ value: 'phone', label: 'Phone' },
	{ value: 'text', label: 'Text' },
];

const operatingSystemOptions = [
	{ value: 'windows', label: 'Windows' },
	{ value: 'macOS', label: 'MacOS' },
	{ value: 'linux', label: 'Linux' },
];

const radioButtonOptions = [
	{ value: 'yes', label: 'Yes' },
	{ value: 'no', label: 'No' },
];

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
				options={contactMethodOptions}
				control={control}
				name="contactMethod"
				label="Preferred Contact Method"
				required
			/>
			<Stack direction={'row'} spacing={2}>
				<FormSelect
					options={operatingSystemOptions}
					control={control}
					name="operatingSystems"
					label="Select your operating systems"
					multiple
					required
				/>
				<FormSelectChips
					options={operatingSystemOptions}
					control={control}
					name="operatingSystems"
					label="Select your operating systems"
					multiple
					required
				/>
			</Stack>

			<Stack direction={'row'} spacing={2}>
				<FormRadioButton
					options={radioButtonOptions}
					control={control}
					name="isSubscribed"
					label="Subscribe to newsletter?"
					row
					required
				/>
				<FormDateField control={control} name="date" label="Date" />
			</Stack>

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
