import { type User } from '@clerk/nextjs/server';
import { Box } from '@mui/material';
import { DataGridPro, type GridColDef } from '@mui/x-data-grid-pro';
import { withRole } from 'src/server/api/helpers/withRole';
import { UserRole } from 'src/types/types';
import { api } from 'src/utils/api';

const columns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		flex: 1,
	},
	{
		field: 'emailAddresses',
		headerName: 'Email',
		flex: 1,
		valueGetter: (params) => {
			const row = params.row as User;
			return row.emailAddresses[0]?.emailAddress;
		},
	},
];

export default function AdminPage() {
	const { data } = api.users.getAllUsers.useQuery();

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			height={'100vh'}
			width={'100vw'}
			bgcolor={'#f5f5f5'}
		>
			<Box
				bgcolor={'white'}
				height={'40%'}
				width={'90%'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<DataGridPro rows={data ?? []} columns={columns} />
			</Box>
		</Box>
	);
}

export const getServerSideProps = withRole(UserRole.ADMIN);
