import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type NavLogoProps = {
	href: string;
	isMobile?: boolean;
	width: number;
	height: number;
};
export const NavLogo = ({ href, isMobile, width, height }: NavLogoProps) => {
	if (isMobile) {
		return (
			<Box flexGrow={1} display="flex" justifyContent={'center'}>
				<Link href="/" style={{ display: 'flex' }}>
					<Image src={href} alt="Site Logo" width={width} height={height} priority />
				</Link>
			</Box>
		);
	}
	return (
		<Box flexGrow={1}>
			<Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
				<Image src={href} alt="Site Logo" width={width} height={height} priority />
			</Link>
		</Box>
	);
};
