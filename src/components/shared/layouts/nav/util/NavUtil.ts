type BaseNavItemType = {
	href: string;
	privatePage?: boolean;
	role?: string;
};

type NavItemWithText = BaseNavItemType & {
	text: string;
	icon?: JSX.Element;
};

type NavItemWithIcon = BaseNavItemType & {
	text?: string;
	icon: JSX.Element;
};

export type NavItemType = NavItemWithText | NavItemWithIcon;
