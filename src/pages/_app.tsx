import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "../globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo
				defaultTitle="..."
				description="..."
				canonical="..."
				additionalMetaTags={[
					{
						name: "keywords",
						content: "...",
					},
				]}
				openGraph={{
					url: "...",
					title: "...",
					description: "...",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}
