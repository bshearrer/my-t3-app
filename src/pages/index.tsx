import { type NextPage } from 'next';
import { CenterCardActionLayout } from 'src/components/home/CenterCardActionLayout';
import { CenterCardActionLayoutContent } from 'src/components/home/CenterCardActionLayoutContent';
import { DialogExample } from 'src/components/home/DialogExample';

const Home: NextPage = () => {
	return (
		<>
			<DialogExample />
			<CenterCardActionLayout>
				<CenterCardActionLayoutContent />
			</CenterCardActionLayout>
		</>
	);
};

export default Home;
