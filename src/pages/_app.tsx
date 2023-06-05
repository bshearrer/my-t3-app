import { ClerkProvider } from '@clerk/nextjs';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LicenseInfo } from '@mui/x-data-grid-pro';
import { type AppProps, type AppType } from 'next/app';
import Head from 'next/head';
import { GlobalLayout } from 'src/components/shared/layouts/GlobalLayout';
import { AlertProvider } from 'src/providers/AlertProvider';
import createEmotionCache from 'src/styles/createEmotionCache';
import 'src/styles/globals.css';
import theme from 'src/styles/theme';
import { api } from 'src/utils/api';

const clientSideEmotionCache = createEmotionCache();
LicenseInfo.setLicenseKey(
	'4bc0373304a349672f01dddcda48e9e1Tz01NjUwNCxFPTE3MDMyNjE4MTEwNzEsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=',
);

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	pageProps: object;
}

const MyApp: AppType = (props: MyAppProps) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<ClerkProvider {...pageProps}>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>Create T3 App</title>
					<meta name="description" content="Generated by create-t3-app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<AlertProvider>
						<GlobalLayout>
							<Component {...pageProps} />
						</GlobalLayout>
					</AlertProvider>
				</ThemeProvider>
			</CacheProvider>
		</ClerkProvider>
	);
};

export default api.withTRPC(MyApp);
