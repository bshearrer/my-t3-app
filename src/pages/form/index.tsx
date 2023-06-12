import { Container } from '@mui/material';
import { FormExample, type FormExampleFormData } from 'src/components/forms/FormExample';

export default function FormPage() {
	const defaultValues: FormExampleFormData = {
		name: '',
		contactMethod: '',
		isSubscribed: '',
		operatingSystems: [],
		date: new Date(),
	};
	return (
		<Container>
			<FormExample defaultValues={defaultValues} />
		</Container>
	);
}
