import { MenuItem, TextField, type TextFieldProps } from '@mui/material';
import { type Control, Controller, type FieldPath, type FieldValues, useFormState } from 'react-hook-form';

export type SelectOptionType = {
	label: string;
	value: string;
};

export type DefaultFieldValues = Record<string, string | number | boolean | null>;

type FormSelectProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	control: Control<TFieldValues>;
	name: TName;
	label: string;
	options: SelectOptionType[];
	multiple?: boolean;
} & Omit<TextFieldProps, 'defaultValue'>;

export const FormSelect = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	name,
	label,
	options,
	multiple = false,
	...textFieldProps
}: FormSelectProps<TFieldValues, TName>) => {
	const { errors } = useFormState({ control });
	const error = !!errors[name];

	const getFormInputOptions = (): JSX.Element[] => {
		return options.map((option) => (
			<MenuItem key={option.value} value={option.value}>
				{option.label}
			</MenuItem>
		));
	};

	return (
		<Controller
			name={name}
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
						multiple,
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
