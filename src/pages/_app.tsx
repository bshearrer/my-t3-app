import { ClerkProvider } from '@clerk/nextjs';
import { type AppType } from 'next/app';
import 'y/styles/globals.css';
import { api } from 'y/utils/api';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ClerkProvider {...pageProps}>
			<Component {...pageProps} />
		</ClerkProvider>
	);
};

export default api.withTRPC(MyApp);
