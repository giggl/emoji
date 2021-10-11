#### work in progress!

# `@giggl/emoji`

Giggl emoji picker is an accessible emoji picker for React built in TypeScript.

### SSR

`@giggl/emoji` uses the amazing `@stitches/react` styling library under the hood. It exports a function called
`getCssText` which can be used to render a style tag on the server. Documentation on that can be found at [stitches.dev/docs/server-side-rendering](https://stitches.dev/docs/server-side-rendering).

A basic implementation (in Next.js) is as follows

```tsx
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

### Development

This repository uses preconstruct for managing its monorepo setup. To start development, you can simply run `yarn dev`
to build project symlinks. Afterwards, you can run `yarn example` to start the ./apps/example project which will hot
reload when you edit the ./packages/emoji package.
