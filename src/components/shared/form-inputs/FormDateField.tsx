import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, type DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormState, type Control, type FieldPath, type FieldValues } from 'react-hook-form';

type FormInputDateFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	control: Control<TFieldValues>;
	name: TName;
} & Omit<DatePickerProps<AdapterDateFns>, 'defaultValue'>;

export const FormDateField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	name,
	...textFieldProps
}: FormInputDateFieldProps<TFieldValues, TName>) => {
	const { errors } = useFormState({ control });
	const error = !!errors[name];
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						{...field}
						{...textFieldProps}
						slotProps={{
							textField: {
								error,
								helperText: (errors[name]?.message as string) || '',
								fullWidth: true,
							},
						}}
					/>
				</LocalizationProvider>
			)}
		/>
	);
};
