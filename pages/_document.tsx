import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const page = ctx.renderPage();

		return {...page};
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"/>
					<link rel="manifest" href="/site.webmanifest"/>
					<script async src="https://www.googletagmanager.com/gtag/js?id=UA-126635126-1"></script>
				  	<script
					    dangerouslySetInnerHTML={{
					      __html: `
					            window.dataLayer = window.dataLayer || [];
					            function gtag(){dataLayer.push(arguments);}
					            gtag('js', new Date());
					            gtag('config', 'UA-126635126-1');
					        `,
					    }}
					/>
				</Head>
				<body className="items-center justify-center bg-white dark:bg-black text-black dark:text-white font-sans text-lg">
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
