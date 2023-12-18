import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
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
		<Image
			position="absolute"
			bottom="auto"
			md-width="600px"
			md-top="300px"
			lg-right="-200px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			right="0px"
			top="130px"
			z-index="1"
		/>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="30%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				sm-width="50%"
			>
				<Image height="auto" src="https://uploads.quarkly.io/6123949e957019001e284458/images/logo.svg?v=2021-09-21T20:30:52.302Z" width="100%" max-width="171px" />
			</Box>
			<Box
				empty-border-width="1px"
				width="70%"
				align-items="center"
				sm-width="50%"
				display="flex"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Override
						slot="Content"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
					/>
					<Override slot="Children" display="flex" align-items="center" justify-content="center" />
					<Box
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
						display="flex"
						align-items="center"
					>
						<Link
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
							href="#"
							font="normal 600 18px/1.5 --fontFamily-googleInter"
							text-decoration-line="initial"
						>
							Home
						</Link>
						<Link
							href="#about"
							text-decoration-line="initial"
							color="--white"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							font="--base"
							margin="0px 20px 0px 20px"
							opacity="0.7"
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
						>
							Application
						</Link>
						<Link
							margin="0px 20px 0px 20px"
							md-color="--indigo"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#contact"
							font="--base"
							text-decoration-line="initial"
							color="--white"
							opacity="0.7"
							hover-opacity="1"
							md-font="--lead"
						>
							Health
						</Link>
						<Link
							font="--base"
							text-decoration-line="initial"
							margin="0px 8px 0px 20px"
							hover-opacity="1"
							transition="opacity 0.3s ease 0s"
							md-color="--indigo"
							href="#testimonial"
							opacity="0.7"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							color="--white"
						>
							Reviews
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 80px 0" quarkly-title="HeroBlock">
			<Override
				slot="SectionContent"
				md-z-index="7"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
			/>
			<Box
				empty-border-width="1px"
				align-items="flex-start"
				md-width="100%"
				display="flex"
				flex-direction="column"
				empty-border-color="LightGray"
				width="70%"
				justify-content="center"
				padding="0px 180px 0px 0px"
				lg-padding="0px 90px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-min-width="64px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					font="--base"
					color="--grey"
					text-transform="uppercase"
					lg-text-align="left"
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					letter-spacing="0.1em"
				>
					CHECK BACK LATER #error 404
				</Text>
				<Text
					letter-spacing="1%"
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Making is beatiful
				</Text>
				<Text
					opacity="0.7"
					font="--base"
					letter-spacing="0.05em"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
				>
					Pardon the inconvenience. Our team is working hard to make this experience much more enjoyable.
				</Text>
				<Box
					display="flex"
					margin="72px 0px 0px 0px"
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="16px 0px 0px 0px"
				>
					<Link
						href="/login"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						hover-color="--primary"
						color="--white"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						border-color="rgba(255, 255, 255, 0.3)"
						border-style="solid"
						text-decoration-line="initial"
						font="--lead"
						border-width="1px"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						background="--color-primary"
						margin="0px 44px 0px 0px"
						sm-margin="0px 22px 0px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-background="--color-white"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
					>
						Application
					</Link>
					<Link
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						lg-padding="15px 23px 15px 23px"
						md-text-align="center"
						hover-color="--indigo"
						text-decoration-line="initial"
						color="--white"
						margin="0px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						md-width="50%"
						href="/login"
						font="--lead"
						border-radius="10px"
						border-width="1px"
						border-style="solid"
						hover-background="--color-white"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						background="rgba(255, 5, 5, 0)"
						padding="15px 30px 15px 30px"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
					>
						Write us
					</Link>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				display="flex"
				md-width="100%"
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				align-items="center"
				justify-content="flex-end"
				md-order="-1"
			>
				<Image
					lg-max-height="400px"
					width="100%"
					max-height="450px"
					md-margin="0px 0px 30px 0px"
					src="https://uploads.quarkly.io/6123949e957019001e284458/images/logos_foundation.svg?v=2021-10-05T09:15:03.700Z"
					lg-position="relative"
					lg-left="-5px"
					max-width="100%"
				/>
			</Box>
		</Section>
		<Section background="--color-indigo" padding="100px 0 0px 0" md-padding="40px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-border-style="solid"
				width="25%"
				display="flex"
			>
				<Image max-width="171px" src="https://uploads.quarkly.io/6123949e957019001e284458/images/logo.svg?v=2021-09-21T20:30:52.302Z" margin="0px 0px 24px 0px" />
				<SocialMedia
					twitter="https://twitter.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
					facebook="https://www.facebook.com/quarklyapp/"
				>
					<Override
						slot="link"
						lg-display="flex"
						lg-align-items="center"
						border-radius="50%"
						color="--light"
						margin="0 12px 0 0px"
						lg-width="28px"
						lg-justify-content="center"
						hover-background="--color-indigo"
						background="--color-greyD1"
						lg-height="28px"
						lg-padding="4px 4px 4px 4px"
					/>
					<Override slot="icon" lg-font="18px sans-serif" />
				</SocialMedia>
			</Box>
			<Box
				empty-border-width="1px"
				display="flex"
				md-width="100%"
				md-align-items="center"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-justify-content="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
				>
					Home
				</Link>
				<Link
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
				>
					Services
				</Link>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					Screenshots
				</Link>
				<Link
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
				>
					Contact
				</Link>
			</Box>
			<Box
				width="25%"
				display="flex"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				md-align-items="center"
				md-justify-content="center"
				empty-min-height="64px"
				empty-border-style="solid"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					HELP LINK
					<br />
				</Text>
				<Link
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
				>
					How to download
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					How it works
				</Link>
				<Link
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
				>
					Video tutorial
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					FAQs
				</Link>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				md-width="100%"
				md-align-items="center"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				flex-direction="column"
				md-justify-content="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					href="https://play.google.com/store"
					transition="opacity 0.3s ease 0s"
					margin="0px 0px 10px 0px"
					font="--base"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					hover-opacity="1"
					target="_blank"
				>
					Google Play Store
				</Link>
				<Link
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
				>
					Apple App Store
				</Link>
				<Link
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
				>
					Download Directly
				</Link>
			</Box>
		</Section>
		<Box
			empty-min-width="64px"
			empty-min-height="64px"
			empty-border-width="1px"
			empty-border-style="solid"
			empty-border-color="LightGray"
			background=",--color-indigo url(https://uploads.quarkly.io/6123949e957019001e284458/images/backfooter.svg?v=2021-08-24T19:40:13.860Z) 0% 0% /cover repeat scroll padding-box"
			min-height="220px"
			md-min-height="140px"
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