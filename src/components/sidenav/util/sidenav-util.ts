import theme from 'src/styles/theme';

/* 
 * Change the following values to change the color of the sidenav drawer.
 */
export const TEXT_COLOR = theme.palette.primary.main;
export const HOVER_COLOR = '#f5f5f5';

/*
 * Changing the following values may result in needing to adjust margin 
 * values in the sidenav drawer components.
 */
export const CLOSED_DRAWER_WIDTH = 75;
export const OPEN_DRAWER_WIDTH = 220;

export type DrawerItemType = {
	href: string;
	icon: React.ReactNode;
	text: string;
};
