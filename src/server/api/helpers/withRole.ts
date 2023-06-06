import { getAuth } from '@clerk/nextjs/server';
import { type GetServerSidePropsContext } from 'next';
import { getUserRole } from 'src/server/api/helpers/getUserRole';
import { type UserRole } from 'src/types/types';

export const withRole = (role: UserRole) => {
	return (context: GetServerSidePropsContext) => {
		const session = getAuth(context.req);
		const userRole = getUserRole(session);

		if (userRole !== role) {
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			};
		}

		return { props: {} };
	};
};
