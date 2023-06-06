import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type NavLogoProps = {
	href: string;
};
export const NavLogo = ({ href }: NavLogoProps) => {
	return (
		<Box flexGrow={1}>
			<Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
				<Image src={href} alt="Site Logo" width={50} height={50} priority />
			</Link>
		</Box>
	);
};
