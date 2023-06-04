import { ListItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const SideNavLogo = () => {
	return (
		<ListItem sx={{ ml: -0.5 }}>
			<Link href="/">
				<Image
					src="/gitwit.svg"
					alt="gitwit logo"
					width={50}
					height={50}
				/>
			</Link>
		</ListItem>
	);
};
