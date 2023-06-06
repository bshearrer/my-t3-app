import { useState } from 'react';
import theme from 'src/styles/theme';
import { SideNavItem } from './sidenav-items/SideNavItem';
import { SideNavLogo } from './sidenav-items/SideNavLogo';
import { SideNavToggleButton } from './sidenav-items/SideNavToggleButton';
import { SideNavUserItem } from './sidenav-items/SideNavUserItem';
import { SideNavDrawer, SideNavList } from './sidenav-items/sidenav-styled-components';

export const CLOSED_DRAWER_WIDTH = 75;
export const OPEN_DRAWER_WIDTH = 220;

export type SideNavItemType = {
	href: string;
	icon: React.ReactNode;
	text: string;
	role?: string;
	privatePage?: boolean;
};

type SideNavProps = {
	sideNavItems: SideNavItemType[];
	logoSrc: string;
	logoWidth?: number;
	logoHeight?: number;
	textColor?: string;
	hoverColor?: string;
};
export const SideNav = ({ logoSrc, logoWidth, logoHeight, sideNavItems, textColor, hoverColor }: SideNavProps) => {
	const [open, setOpen] = useState(false);

	return (
		<SideNavDrawer open={open} variant="permanent">
			<SideNavList>
				<SideNavLogo src={logoSrc} width={logoWidth ?? 50} height={logoHeight ?? 50} />
				<SideNavToggleButton
					open={open}
					setOpen={setOpen}
					textColor={textColor ?? theme.palette.primary.main}
				/>
				{sideNavItems.map((item) => (
					<SideNavItem
						key={item.href}
						item={item}
						open={open}
						textColor={textColor ?? theme.palette.primary.main}
						hoverColor={hoverColor ?? '#F5F5F5'}
					/>
				))}
				<SideNavUserItem textColor={textColor ?? theme.palette.primary.main} open={open} />
			</SideNavList>
		</SideNavDrawer>
	);
};
