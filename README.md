#### work in progress!

# `@giggl/emoji`

Giggl emoji picker is an accessible emoji picker for React built in TypeScript.

### SSR

`@giggl/emoji` uses the amazing `@stitches/react` styling library under the hood. It exports a function called
`getCssText` which can be used to render a style tag on the server. Documentation on that can be found at [stitches.dev/docs/server-side-rendering](https://stitches.dev/docs/server-side-rendering).

A basic implementation (in Next.js) is as follows

```ts
import React from 'react';
import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import {getCssText} from '@giggl/emoji';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<style
						id="stitches"
						dangerouslySetInnerHTML={{__html: getCssText()}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
```
