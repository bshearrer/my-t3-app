import { TextField, type TextFieldProps } from '@mui/material';
import { Controller, useFormState, type Control, type Path } from 'react-hook-form';

type DefaultFieldValues = Record<string, string | number | boolean | null>;

type FormTextFieldProps<T extends DefaultFieldValues> = {
	control: Control<T>;
	name: keyof T;
	label: string;
} & Omit<TextFieldProps, 'defaultValue'>;

export const FormTextField = <T extends DefaultFieldValues>({
	control,
	name,
	label,
	...textFieldProps
}: FormTextFieldProps<T>) => {
	const { errors } = useFormState({ control });
	const error = !!errors[name];
	return (
		<Controller
			render={({ field }) => (
				<TextField
					{...field}
					{...textFieldProps}
					label={label}
					error={error}
					helperText={(errors[name]?.message as string) || ''}
					fullWidth
				/>
			)}
			name={name as Path<T>}
			control={control}
		/>
	);
};
