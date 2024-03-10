import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"/>
					<link rel="manifest" href="/site.webmanifest"/>
				</Head>
				<body className="items-center justify-center bg-white dark:bg-black text-black dark:text-white font-sans text-lg">
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
