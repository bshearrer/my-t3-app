import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type NavLogoProps = {
	href: string;
	isMobile?: boolean;
	width: number;
	height: number;
	itemPosition: 'left' | 'center' | 'right';
	drawerImagePosition: 'left' | 'center' | 'right';
};
export const NavLogo = ({ href, isMobile, width, height, itemPosition, drawerImagePosition }: NavLogoProps) => {
	if (isMobile) {
		return (
			<Box display="flex" justifyContent={drawerImagePosition ?? 'center'} px={2}>
				<Link href="/" style={{ display: 'flex' }}>
					<Image src={href} alt="Site Logo" width={width} height={height} priority />
				</Link>
			</Box>
		);
	}
	return (
		<Box flexGrow={itemPosition == 'left' ? 0 : 1}>
			<Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
				<Image src={href} alt="Site Logo" width={width} height={height} priority />
			</Link>
		</Box>
	);
};
