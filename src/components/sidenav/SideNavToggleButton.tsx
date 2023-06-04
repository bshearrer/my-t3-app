import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, ListItem } from '@mui/material';

type SideNavToggleButtonProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	textColor: string;
};
export const SideNavToggleButton = ({
	open,
	setOpen,
	textColor,
}: SideNavToggleButtonProps): JSX.Element => {
	return (
		<ListItem>
			<IconButton
				onClick={() => setOpen(!open)}
				sx={{ color: textColor }}
			>
				{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
			</IconButton>
		</ListItem>
	);
};
