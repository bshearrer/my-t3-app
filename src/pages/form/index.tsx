import { Container } from '@mui/material';
import { FormExample, type FormExampleFormData } from 'src/components/forms/FormExample';

export default function FormPage() {
	const defaultValues: FormExampleFormData = {
		name: '',
		contactMethod: '',
	};
	return (
		<Container>
			<FormExample defaultValues={defaultValues} />
		</Container>
	);
}
