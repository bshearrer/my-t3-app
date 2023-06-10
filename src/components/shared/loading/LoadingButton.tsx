import { Button, CircularProgress, type ButtonProps } from '@mui/material';
import { type ReactNode } from 'react';

type LoadingButtonProps = {
	label: string;
	isLoading: boolean;
	endIcon?: ReactNode;
} & ButtonProps;

export const LoadingButton = ({ label, isLoading, endIcon, onClick, ...buttonProps }: LoadingButtonProps) => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!isLoading && onClick) {
			onClick(event);
		}
	};

	return (
		<Button
			{...buttonProps}
			onClick={handleClick}
			endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : endIcon}
		>
			{label}
		</Button>
	);
};
