import theme from 'src/styles/theme';

export const TEXT_COLOR = theme.palette.primary.main;
export const HOVER_COLOR = '#f5f5f5';
export const CLOSED_DRAWER_WIDTH = 75;
export const OPEN_DRAWER_WIDTH = 220;

export type DrawerItemType = {
	href: string;
	icon: React.ReactNode;
	text: string;
};
