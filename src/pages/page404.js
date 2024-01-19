import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Section padding="88px 0 88px 0" min-height="100vh" quarkly-title="404-1">
			<Override slot="SectionContent" max-width="1220px" justify-content="center" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--primary">
					404
				</Text>
				<Text
					color="--dark"
					margin="8px 0px 16px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					letter-spacing="-0.025em"
				>
					Page not found
				</Text>
				<Text
					lg-width="80%"
					font="--lead"
					color="--dark"
					margin="0px 0px 40px 0px"
					text-align="center"
				>
					Sorry, we couldn’t find the page you’re looking for.
				</Text>
				<Box
					display="flex"
					grid-template-columns="1fr 1fr"
					grid-gap="8px"
					sm-grid-template-columns="1fr"
					align-items="center"
					justify-items="center"
				>
					<Link
						font="--lead"
						padding="12px 24px 12px 24px"
						background="--color-primary"
						border-radius="8px"
						href="/"
						text-decoration-line="initial"
						color="--light"
						transition="--opacityOut"
						hover-opacity="0.7"
						display="flex"
						align-items="center"
					>
						Go back to home
					</Link>
				</Box>
			</Box>
		</Section>
		<Image
			position="absolute"
			bottom="auto"
			md-width="600px"
			md-top="300px"
			lg-right="-200px"
			lg-top="0px"
			src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01:11:48.094Z"
			right="0px"
			top="130px"
			z-index="1"
			srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=3200 3200w"
			sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
		/>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});