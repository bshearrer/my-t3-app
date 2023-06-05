import Document, { Head, Html, Main, NextScript } from 'next/document';
import theme, { roboto } from 'src/styles/theme';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className={roboto.className}>
				<Head>
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="shortcut icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
