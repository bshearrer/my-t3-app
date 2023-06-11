import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { type Control, Controller, type FieldPath, type FieldValues, useFormState } from 'react-hook-form';

export type RadioOptionType = {
	label: string;
	value: string;
};

export type DefaultFieldValues = Record<string, string | number | boolean | null>;

type FormRadioButtonProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	control: Control<TFieldValues>;
	name: TName;
	label: string;
	options: RadioOptionType[];
	row?: boolean;
	required?: boolean;
};

export const FormRadioButton = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	name,
	label,
	options,
	row = false,
	required = false,
}: FormRadioButtonProps<TFieldValues, TName>) => {
	const { errors } = useFormState({ control });
	const error = !!errors[name];

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormControl error={error}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography color={error ? 'error' : 'inherit'}>{label}</Typography>
						{required && (
							<Typography component="span" color={error ? 'error' : 'inherit'}>
								&nbsp;*
							</Typography>
						)}
					</Box>

					<RadioGroup {...field} row={row}>
						{options.map((option, index) => (
							<FormControlLabel
								key={index}
								value={option.value}
								control={<Radio />}
								label={option.label}
							/>
						))}
					</RadioGroup>
					{errors[name] && (
						<Typography color="error" variant="caption" sx={{ pl: 2 }}>
							{errors[name]?.message as string}
						</Typography>
					)}
				</FormControl>
			)}
		/>
	);
};
