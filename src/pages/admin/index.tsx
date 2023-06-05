import { getAuth } from '@clerk/nextjs/server';
import { type GetServerSidePropsContext } from 'next';
import { getUserRole } from 'src/server/api/helpers/getUserRole';
import { UserRoles } from 'src/types/types';

export default function AdminPage() {
	return <>Admin Page</>;
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
	const session = getAuth(context.req);
	const role = getUserRole(session);

	if (role !== UserRoles.ADMIN) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};
