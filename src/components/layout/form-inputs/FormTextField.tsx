import { TextField, type TextFieldProps } from '@mui/material';
import { Controller, type Control } from 'react-hook-form';

interface DefaultFieldValues {
	[key: string]: string | number | boolean | null;
}

type FormTextFieldProps<T extends DefaultFieldValues = DefaultFieldValues> = {
	control: Control<T>;
	name: keyof T;
	label: string;
	defaultValue: T[keyof T];
	error: boolean;
	helperText: string | null | undefined;
} & TextFieldProps;

export const FormTextField = ({
	control,
	name,
	label,
	defaultValue,
	error,
	helperText,
	...textFieldProps
}: FormTextFieldProps) => {
	return (
		<Controller
			render={({ field }) => (
				<TextField
					{...field}
					{...textFieldProps}
					label={label}
					defaultValue={defaultValue}
					error={error}
					helperText={helperText}
					fullWidth
				/>
			)}
			name={name}
			control={control}
		/>
	);
};
