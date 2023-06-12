import { Box, Chip, MenuItem, TextField, type TextFieldProps } from '@mui/material';
import { Controller, useFormState, type Control, type FieldPath, type FieldValues } from 'react-hook-form';

export type SelectOptionType = {
	label: string;
	value: string;
};

type FormSelectChipsProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	control: Control<TFieldValues>;
	name: TName;
	label: string;
	options: SelectOptionType[];
	multiple?: boolean;
} & Omit<TextFieldProps, 'defaultValue'>;

export const FormSelectChips = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	name,
	label,
	options,
	multiple = false,
	...textFieldProps
}: FormSelectChipsProps<TFieldValues, TName>) => {
	const { errors } = useFormState({ control });
	const error = !!errors[name];

	const getFormInputOptions = (): JSX.Element[] => {
		return options.map((option) => (
			<MenuItem key={option.value} value={option.value}>
				{option.label}
			</MenuItem>
		));
	};

	const findLabelByValue = (value: string): string => {
		const foundOption = options.find((option) => option.value === value);
		return foundOption?.label ?? '';
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					{...textFieldProps}
					select
					label={label}
					error={error}
					helperText={(errors[name]?.message as string) || ''}
					fullWidth
					SelectProps={{
						multiple,
						renderValue: (selected: unknown) => (
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
								{(selected as string[]).map((value) => (
									<Chip key={value} label={findLabelByValue(value)} />
								))}
							</Box>
						),
					}}
				>
					{getFormInputOptions()}
				</TextField>
			)}
		/>
	);
};
