import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Typography,
	type FormControlProps,
} from '@mui/material';
import { Controller, useFormState, type Control, type Path } from 'react-hook-form';

export type RadioOptionType = {
	label: string;
	value: string;
};

export type DefaultFieldValues = Record<string, string | number | boolean | null>;

export type FormRadioButtonProps<T extends DefaultFieldValues> = {
	control: Control<T>;
	name: keyof T;
	label: string;
	options: RadioOptionType[];
	row?: boolean;
} & Omit<FormControlProps, 'defaultValue'>;

export const FormRadioButton = <T extends DefaultFieldValues>({
	control,
	name,
	label,
	options,
	row = false,
	...formControlProps
}: FormRadioButtonProps<T>) => {
	const { errors } = useFormState({ control });
	const error = !!errors[name as string];

	return (
		<Controller
			name={name as Path<T>}
			control={control}
			render={({ field }) => (
				<FormControl error={error} {...formControlProps}>
					<FormLabel>
						<Typography>{label}</Typography>
					</FormLabel>

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
					{errors[name as string] && (
						<Typography color="red" variant="caption" sx={{ pl: 2 }}>
							{errors[name as string]?.message as string}
						</Typography>
					)}
				</FormControl>
			)}
		/>
	);
};
