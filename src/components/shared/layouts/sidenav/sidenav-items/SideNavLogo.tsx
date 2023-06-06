import { Box, ListItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type SideNavLogoProps = {
	src: string;
	width: number;
	height: number;
};
export const SideNavLogo = ({ src, width, height }: SideNavLogoProps) => {
	return (
		<ListItem sx={{ ml: -0.5 }}>
			<Box
				sx={{
					cursor: 'pointer',
					transition: 'all 0.2s ease-in-out',
					'&:hover': {
						transform: 'scale(0.9)',
					},
				}}
			>
				<Link href="/">
					<Image src={src} alt="gitwit logo" width={width} height={height} priority />
				</Link>
			</Box>
		</ListItem>
	);
};
