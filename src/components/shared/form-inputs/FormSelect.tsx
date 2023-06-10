import { MenuItem, TextField, type TextFieldProps } from '@mui/material';
import { Controller, useFormState, type Control, type Path } from 'react-hook-form';

export type SelectOptionType = {
	label: string;
	value: string;
};

export type DefaultFieldValues = Record<string, string | number | boolean | null>;

export type FormSelectProps<T extends DefaultFieldValues> = {
	control: Control<T>;
	name: keyof T;
	label: string;
	options: SelectOptionType[];
} & Omit<TextFieldProps, 'defaultValue'>;

export const FormSelect = <T extends DefaultFieldValues>({
	control,
	name,
	label,
	options,
	...textFieldProps
}: FormSelectProps<T>) => {
	const { errors } = useFormState({ control });
	const error = !!errors[name];

	const getFormInputOptions = (): JSX.Element[] => {
		return options.map((option) => {
			return (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			);
		});
	};

	return (
		<Controller
			name={name as Path<T>}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					{...textFieldProps}
					fullWidth
					select
					label={label}
					error={error}
					helperText={(errors[name]?.message as string) || ''}
					SelectProps={{
						MenuProps: {
							PaperProps: {
								sx: {
									maxHeight: 600,
								},
							},
						},
					}}
				>
					{getFormInputOptions()}
				</TextField>
			)}
		/>
	);
};
