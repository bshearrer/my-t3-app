import { TextField, type TextFieldProps } from '@mui/material';
import { type Control, Controller, type FieldPath, type FieldValues, useFormState } from 'react-hook-form';

type FormValue = string | string[];

export type DefaultFieldValues = Record<string, FormValue | number | boolean | null>;

type FormTextFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	control: Control<TFieldValues>;
	name: TName;
	label: string;
} & Omit<TextFieldProps, 'defaultValue'>;

export const FormTextField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	name,
	label,
	...textFieldProps
}: FormTextFieldProps<TFieldValues, TName>) => {
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
			name={name}
			control={control}
		/>
	);
};
