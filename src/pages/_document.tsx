import Document, { Html, Main, NextScript, Head } from "next/document";
import React from "react";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<body className="">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
