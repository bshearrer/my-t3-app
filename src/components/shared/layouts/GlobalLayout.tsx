import { type PropsWithChildren } from 'react';
import { Nav } from './nav/Nav';

export const GlobalLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
	// return (
	// 	<Box display={'flex'}>
	// 		<SideNavDrawer />
	// 		{children}
	// 	</Box>
	// );
};
