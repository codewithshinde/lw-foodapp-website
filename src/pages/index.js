import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Icon, LinkBox, Hr, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FaHeartbeat, FaMedkit, FaCommentMedical, FaClinicMedical } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
			md-top="300px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			position="absolute"
			right="0px"
			bottom="auto"
			top="130px"
			z-index="1"
			lg-right="-200px"
			md-width="600px"
		/>
		<Section background="linear-gradient(264.47deg,#020004 0%,#262426 100%)" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Image height="auto" src="https://uploads.quarkly.io/6123949e957019001e284458/images/logo.svg?v=2021-09-21T20:30:52.302Z" width="100%" max-width="171px" />
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			/>
		</Section>
		<Section background="url(https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" padding="36px 0 80px 0" quarkly-title="HeroBlock" md-padding="36px 0 60px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
			/>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="flex-start"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					color="--grey"
					lg-text-align="left"
					font="--base"
					text-transform="uppercase"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					$11/mo. — no insurance needed
				</Text>
				<Text
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Restaurants in your  pocket
				</Text>
				<Text
					font="--base"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="1"
				>
					Our board-certified doctors are available 24/7.
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
				>
					<Link
						sm-margin="0px 22px 0px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						href="/login"
						text-decoration-line="initial"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						lg-margin="0px 32px 0px 0px"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
						hover-color="--primary"
						color="--white"
						margin="0px 44px 0px 0px"
						lg-padding="15px 23px 15px 23px"
						md-width="50%"
						background="--color-primary"
						font="--lead"
						hover-background="--color-white"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
					>
						Get Stared
					</Link>
					<Link
						padding="15px 30px 15px 30px"
						font="--lead"
						border-radius="10px"
						border-width="2px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="15px 13px 15px 13px"
						text-decoration-line="initial"
						color="--white"
						background="rgba(255, 5, 5, 0)"
						margin="0px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						href="/login"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
					>
						Learn more
					</Link>
				</Box>
			</Box>
			<Box
				empty-border-style="solid"
				width="30%"
				display="flex"
				justify-content="flex-end"
				empty-border-width="1px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				align-items="center"
				md-width="100%"
				md-order="-1"
				empty-min-width="64px"
			>
				<Image
					lg-max-height="400px"
					width="100%"
					max-height="450px"
					md-margin="0px 0px 30px 0px"
					src="https://uploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20:44:05.312Z"
					lg-position="relative"
					lg-left="-5px"
					max-width="100%"
					srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="160px 0 24px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				flex-direction="column"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Image
					position="static"
					lg-left="0px"
					md-width="100%"
					border-radius="10px"
					lg-max-height="366px"
					src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
					left="-140px"
					max-width="100%"
					object-fit="cover"
					srcSet="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
			>
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%">
					<Image width="24px" height="24px" src="https://uploads.quarkly.io/6123949e957019001e284458/images/icon-man.svg?v=2021-09-21T22:14:38.397Z" margin="0px 15px 0px 0px" />
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					>
						Contact a doctor in a snap
					</Text>
				</Box>
				<Text
					width="85%"
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--indigo"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Take Care of Your Health
				</Text>
				<Text
					font="--base"
					opacity=".7"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 25px 0px"
					color="--dark"
				>
					Use our free symptom checker to compare your or your children's symptoms to those of others. Your results will help a doctor to treat you immediately if you decide to consult with a specialist.
				</Text>
				<Link
					href="/login"
					sm-padding="15px 20px 15px 20px"
					hover-background="rgba(5, 165, 255, 0)"
					border-width="1px"
					border-style="solid"
					font="--lead"
					sm-margin="0px 22px 0px 0px"
					border-color="rgba(255, 255, 255, 0.3)"
					md-width="100%"
					md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					text-decoration-line="initial"
					color="--white"
					margin="0px 44px 0px 0px"
					hover-color="--primary"
					hover-border-color="--color-primary"
					md-text-align="center"
					background="--color-primary"
					padding="15px 30px 15px 30px"
					border-radius="10px"
					sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
				>
					Download for free
				</Link>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6123949e957019001e284458/images/Group%20177.png?v=2021-08-24T00:44:18.633Z) 0% 30% /cover no-repeat scroll padding-box" sm-padding="0px 0 0px 0" md-padding="50px 0 50px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-gap="16px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-gap="0px"
				md-grid-template-columns="repeat(2, 1fr)"
			/>
			<Box
				justify-content="center"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				align-items="center"
				display="flex"
				min-height="320px"
				empty-min-height="64px"
				empty-border-style="solid"
				padding="0px 0px 60px 0px"
			>
				<Text
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
				>
					5M+
				</Text>
				<Text
					text-align="center"
					opacity="0.7"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--dark"
					font="--lead"
					margin="0px 0px 0px 0px"
				>
					Users
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				min-height="320px"
				padding="0px 0px 60px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Text
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
				>
					40k+
				</Text>
				<Text
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					font="--lead"
					margin="0px 0px 0px 0px"
					text-align="center"
					opacity="0.7"
					position="relative"
					color="--dark"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Testimonials{" "}
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				sm-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				justify-content="center"
				min-height="320px"
				md-margin="30px 0px 0px 0px"
				align-items="center"
				padding="0px 0px 60px 0px"
			>
				<Text
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
				>
					24/7
				</Text>
				<Text
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					margin="0px 0px 0px 0px"
					text-align="center"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					color="--dark"
					font="--lead"
				>
					Support{" "}
				</Text>
			</Box>
			<Box
				flex-direction="column"
				md-margin="30px 0px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				display="flex"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				padding="0px 0px 60px 0px"
				sm-margin="0px 0px 0px 0px"
				min-height="320px"
				empty-border-width="1px"
				align-items="center"
				justify-content="center"
			>
				<Text
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
				>
					$12
				</Text>
				<Text
					lg-width="70%"
					width="70%"
					position="relative"
					z-index="1"
					color="--dark"
					text-align="center"
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					font="--lead"
					margin="0px 0px 0px 0px"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Monthly subscription
				</Text>
			</Box>
		</Section>
		<Section md-padding="60px 0 60px 0" padding="84px 0 60px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Box
				border-radius="10px"
				flex-direction="column"
				width="33.333%"
				md-padding="0px 0px 0px 0px"
				sm-padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				md-width="100%"
				sm-width="100%"
				padding="16px 16px 16px 16px"
				lg-width="50%"
			>
				<Text color="--primary" lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif" margin="0px 0px 0px 0px" font="--lead">
					Board-certified doctors
				</Text>
				<Text
					lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--indigo"
					font="--headline4"
					margin="15px 0px 0px 0px"
					sm-font="700 25px/1.3 &quot;Inter&quot;, sans-serif"
				>
					Medical Care at Home
				</Text>
				<Text margin="20px 0px 10px 0px" color="--dark" font="--base" opacity=".9">
					Consult with a doctor directly from your phone, 24/7. No waiting rooms or appointments.
				</Text>
				<Image height="48px" src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z" width="48px" />
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaHeartbeat}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Primary care
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Manage current issues and prevent future diseases in one go.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaMedkit}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Urgent care
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get round-the-clock medical help from world-class specialists from anywhere in the globe.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaCommentMedical}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Mental Health
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Control your anxiety and depression with a personalized treatment plan online.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaClinicMedical}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Pediatrics
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get free care for your children over 3 with a monthly subscription.
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="io"
						icon={IoIosWater}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						Remote Treatment
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get high-quality remote care powered by doctors and data.
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section padding="60px 0 100px 0" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				justify-content="center"
				align-items="flex-start"
				flex-direction="column"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
			>
				<Text
					margin="0px 0px 38px 0px"
					font="--headline2"
					color="--indigo"
					md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					text-align="left"
				>
					Latest User Reviews
				</Text>
				<Hr
					border-style="solid"
					margin="0px 0px 0px 0px"
					height="0px"
					lg-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
			</Box>
			<Box
				flex-direction="column"
				justify-content="flex-start"
				border-width="0px 1px 0px 0px"
				md-padding="32px 16px 16px 16px"
				width="25%"
				max-height="265px"
				display="flex"
				align-items="center"
				sm-justify-content="flex-start"
				lg-justify-content="flex-start"
				md-align-items="center"
				border-color="rgba(66, 82, 207, 0.1)"
				height="100%"
				md-width="50%"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				margin="0px 0px 0px 0px"
				padding="16px 32px 16px 16px"
			>
				<Image
					object-fit="cover"
					border-radius="50%"
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=228&q=80"
					srcSet="https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					John B.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					I like the app! The doctors are very helpful and friendly. I've saved a lot on the trip and hospital bills.
				</Text>
			</Box>
			<Box
				padding="16px 32px 16px 32px"
				border-width="0px 1px 0px 1px"
				width="25%"
				md-align-items="center"
				align-items="center"
				flex-direction="column"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-border-width="0px 0px 0px 1px"
				md-justify-content="flex-start"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
				display="flex"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				height="100%"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				md-width="50%"
			>
				<Image
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=272&q=80"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text font="--lead" color="--indigo" sm-text-align="center" margin="0px 0px 8px 0px">
					Bob W.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					I got professional help and my prescription quite fast. The app is awesome. The doctors are real pros!
				</Text>
			</Box>
			<Hr
				display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-style="solid"
				margin="0px 16px 32px 16px"
				md-margin="16px 16px 16px 16px"
				md-display="block"
				border-width="2px 0 0 0"
				height="0px"
			/>
			<Box
				border-color="rgba(66, 82, 207, 0.1)"
				md-justify-content="flex-start"
				sm-margin="0px 0px 30px 0px"
				padding="16px 32px 16px 32px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				sm-padding="32px 16px 16px 16px"
				border-width="0px 1px 0px 1px"
				lg-min-height="298px"
				md-border-width="0px 1px 0px 0px"
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				height="100%"
				width="25%"
				md-width="50%"
				lg-justify-content="flex-start"
				md-align-items="center"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
			>
				<Image
					src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=274&q=80"
					object-fit="cover"
					border-radius="50%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					srcSet="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					Natalie J.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					One of the best medical apps I've ever come across! Highly recommend to everyone.
				</Text>
			</Box>
			<Box
				align-items="center"
				padding="16px 32px 16px 32px"
				border-width="0px 0px 0px 1px"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				height="100%"
				md-align-items="center"
				width="25%"
				max-height="265px"
				md-width="50%"
				margin="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				display="flex"
				sm-justify-content="flex-start"
				flex-direction="column"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				md-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
			>
				<Image
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					Laura H.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					I got my meds so fast. Thank you a lot! You are a lifesaver.
				</Text>
			</Box>
		</Section>
		<Section sm-padding="60px 0 60px 0" lg-padding="60px 0 100px 0" padding="60px 0 160px 0">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Box
				width="87%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
				background="--color-light"
				opacity="0.3"
			/>
			<Box
				background="--color-light"
				opacity="0.4"
				sm-display="none"
				width="93%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
			/>
			<Box
				padding="66px 30px 66px 30px"
				flex-direction="column"
				sm-padding="30px 15px 30px 15px"
				sm-border-radius="12px"
				align-items="center"
				background="--color-light"
				border-radius="30px"
				justify-content="center"
				width="100%"
				display="flex"
				margin="0px 0px 0px 0px"
			>
				<Text font="--lead" color="--primary" text-transform="uppercase" margin="0px 0px 25px 0px">
					NEWSLETTER
				</Text>
				<Text
					text-align="center"
					lg-font="normal 600 30px/1.3 --fontFamily-googleInter"
					md-font="normal 600 25px/1.3 --fontFamily-googleInter"
					sm-font="normal 600 19px/1.3 --fontFamily-googleInter"
					margin="0px 0px 35px 0px"
					font="normal 600 39px/1.3 --fontFamily-googleInter"
					color="--dark"
				>
					We offer 20% off every month
					<br />
					for all our subscribers
				</Text>
				<Box
					border-color="rgba(5, 0, 11, 0.1)"
					border-radius="16px"
					border-width="1px"
					border-style="solid"
					sm-width="100%"
					background="#ffffff"
					padding="12px 12px 12px 12px"
				>
					<Components.QuarklycommunityKitNetlifyForm>
						<Input
							placeholder="Email Address"
							sm-width="100%"
							sm-padding="12px 14px 12px 14px"
							border-width="0px"
							padding="14px 16px 14px 16px"
							width="320px"
							md-width="250px"
							name="Email Address"
							type="email"
							required
							background="rgba(255, 255, 255, 0)"
						/>
						<Button
							sm-width="100%"
							border-width="1px"
							border-color="--color-primary"
							font="--base"
							padding="14px 53px 14px 53px"
							sm-padding="12px 15px 12px 15px"
							hover-background="--color-light"
							hover-color="--primary"
							border-style="solid"
							background="--color-primary"
							border-radius="10px"
							md-padding="14px 30px 14px 30px"
						>
							Subscribe
						</Button>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Section background="--color-indigo" padding="100px 0 100px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-justify-content="center"
				display="flex"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-align-items="center"
			>
				<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/logo.svg?v=2021-09-21T20:30:52.302Z" margin="0px 0px 24px 0px" max-width="171px" />
				<SocialMedia
					facebook="https://www.facebook.com/quarklyapp/"
					twitter="https://twitter.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
				>
					<Override
						slot="link"
						margin="0 12px 0 0px"
						hover-background="--color-indigo"
						background="--color-greyD1"
						lg-height="28px"
						lg-padding="4px 4px 4px 4px"
						lg-display="flex"
						lg-align-items="center"
						border-radius="50%"
						lg-justify-content="center"
						lg-width="28px"
						color="--light"
					/>
					<Override slot="icon" lg-font="18px sans-serif" />
				</SocialMedia>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				md-width="100%"
				md-justify-content="center"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-align-items="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
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
					Home
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
					Services
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
					Screenshots
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
				>
					Contact
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				flex-direction="column"
				md-justify-content="center"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				md-width="100%"
				md-align-items="center"
				empty-border-width="1px"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					HELP LINK
					<br />
				</Text>
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
					How to download
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
					How it works
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
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
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				display="flex"
				flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://play.google.com/store"
					transition="opacity 0.3s ease 0s"
					target="_blank"
				>
					Google Play Store
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
					Apple App Store
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
					Download Directly
				</Link>
			</Box>
		</Section>
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