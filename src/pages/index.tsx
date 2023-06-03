import { Typography } from '@mui/material';
import { type NextPage } from 'next';
import { api } from 'y/utils/api';

const Home: NextPage = () => {
	const { data } = api.example.hello.useQuery({ text: 'from tRPC' });

	return (
		<>
			<Typography>{data?.greeting}</Typography>
		</>
	);
};

export default Home;
