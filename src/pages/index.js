import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Icon, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";
import { FaChartBar } from "react-icons/fa";
import { MdPhonelinkSetup } from "react-icons/md";
import { GiRingingBell } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				DELIVERY EXPRESS — Food delivery partner
			</title>
			<meta name={"description"} content={"Food delivery partner right when you needed"} />
			<meta property={"og:title"} content={"DELIVERY EXPRESS — Food delivery partner"} />
			<meta property={"og:description"} content={"Food delivery partner right when you needed"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-6" padding="24px 0px 24px 0px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				width="100%"
				padding="0px 24px 0px 24px"
			/>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="40%"
				sm-width="50%"
				md-width="50%"
				lg-width="40%"
				lg-justify-content="flex-start"
				md-justify-content="flex-end"
				onloadShow
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="ai"
					icon={AiOutlineMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-end"
					justify-content="flex-start"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Image
								src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01:11:48.094Z"
								display="block"
								width="36px"
								height="36px"
								srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
								lg-font="--headline3"
								md-font="--headline4"
							>
								DELIVERY EXPRESS
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="4px"
						lg-flex-direction="row"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--base"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 1px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 6px 6px 6px" lg-padding="6px 12px 6px 12px" />
						<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						display="none"
						padding="12px 0"
						justify-content="flex-end"
						align-items="flex-start"
						flex-direction="row"
						width="40%"
						lg-width="100%"
						md-justify-content="flex-start"
						lg-justify-content="flex-start"
						lg-padding="0px 0 12px 0"
						lg-flex-direction="column"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-grid-gap="24px"
						lg-align-items="flex-end"
					>
						<Link
							font="--base"
							text-decoration-line="initial"
							margin="0px 0px 0px 16px"
							background="--color-darkL1"
							border-radius="8px"
							href="http://tharasafoodadda.asyncteam.in"
							color="#ffffff"
							padding="6px 12px 7px 12px"
							lg-padding="12px 16px 12px 16px"
							lg-font="--lead"
							lg-margin="0px 0px 0px 0px"
							target="_blank"
						>
							JOIN AS RESTAURANT PARTNER
						</Link>
					</Box>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-end"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="24px 0px 0px 0px"
					>
						<SocialMedia
							instagram="#"
							margin="0px 0px 0px 0px"
							facebook="#"
							youtube="#"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--grey" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="20%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="20%"
				md-justify-content="flex-start"
				md-order="-1"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image
						src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01:11:48.094Z"
						display="block"
						width="50px"
						height="50px"
						srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						DELIVERY EXPRESS
					</Text>
				</LinkBox>
			</Box>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="flex-end"
				align-items="flex-start"
				flex-direction="row"
				width="40%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="40%"
				md-justify-content="flex-start"
				md-display="none"
			>
				<Link
					font="--base"
					text-decoration-line="initial"
					margin="0px 0px 0px 16px"
					background="--color-darkL1"
					border-radius="8px"
					md-margin="0px 0px 0px 14px"
					href="http://tharasafoodadda.asyncteam.in"
					color="#ffffff"
					padding="6px 12px 7px 12px"
					md-order="1"
					target="_blank"
				>
					JOIN US
				</Link>
			</Box>
		</Section>
		<Box
			width="100%"
			display="flex"
			align-items="center"
			justify-content="center"
			position="static"
			padding="13px 0px 13px 0px"
			top="0px"
			quarkly-title="Banner-2"
			background="linear-gradient(90deg, #ffd7c7,#ffd3ff,#ffffff);"
			md-flex-direction="column"
			md-display="flex"
			md-grid-gap="8px"
		>
			<Text margin="0px 0px 0px 0px" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" color="--dark" md-text-align="center">
				FoodCon 2024
			</Text>
			<Icon category="bs" icon={BsDot} size="16px" md-display="none" />
			<Text margin="0px 0px 0px 0px" font="--base" color="--dark" md-text-align="center">
				Order on FoodCon day to avail 0% Commission
			</Text>
			<LinkBox
				color="--light"
				margin="0px 0px 0px 16px"
				text-decoration-line="initial"
				text-transform="uppercase"
				background="--color-dark"
				font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
				padding="6px 16px 7px 16px"
				border-radius="24px"
				letter-spacing="0.3px"
				flex-direction="row"
				href="http://tharasafoodadda.asyncteam.in"
				target="_blank"
			>
				<Text margin="0px 0px 1px 0px" text-transform="initial">
					Register now
				</Text>
				<Icon category="ti" icon={TiArrowRight} size="24px" margin="0px 0px 0px 0px" />
			</LinkBox>
		</Box>
		<Section padding="80px 0 90px 0" md-padding="60px 0 60px 0" background="linear-gradient(180deg,rgba(42, 9, 113, 0.7) 0%,rgba(12, 36, 127, 0.7) 100%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover repeat scroll padding-box" quarkly-title="Reviews-8">
			<Override slot="SectionContent" md-padding="0px 0 0px 0" />
			<Box
				min-width="100px"
				min-height="100px"
				padding="30px 0 10px 0"
				border-radius="8px"
				margin="0px 20px 25px 20px"
				display="flex"
				flex-direction="row"
				justify-content="space-between"
				lg-margin="0px 0 25px 0px"
				md-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="0px 0px 0px 50px"
					width="50%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					md-padding="30px 0px 0px 0"
				>
					<Box min-width="100px" min-height="100px">
						<Image
							src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01:11:48.094Z"
							display="block"
							width="80px"
							srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01%3A11%3A48.094Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Text margin="0px 0px 30px 0px" color="#e8e3e3" sm-margin="0px 0px 20px 0px" font="--base">
							DELIVERY EXPRESS is a cutting-edge delivery service accessible through mobile applications, connecting customers with a diverse array of restaurants and retailers. Our platform provides a seamless experience for users to explore menus and food offerings, placing orders effortlessly and having them delivered directly to their doorstep.{"\n\n"}
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sansHelvetica" color="--light">
								Rakesh Rasa
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="#afb5bd">
								Event Planner
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="rgb(44, 0, 81) url(https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo.png?v=2023-12-22T01:11:48.094Z) 0% 0% /auto repeat scroll padding-box">
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
				color="#fff"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--light"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					background="rgba(0, 0, 0, 0)"
				>
					Why partner with DELIVERY EXPRESS?
					<br />
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaChartBar}
						margin="0px 0px 30px 0px"
						color="--indigo"
						size="48px"
						width="100px"
						height="100px"
						order="0"
						align-self="center"
					/>
					<Text
						margin="0px 0px 18px 0px"
						color="--darkL2"
						font="--headline4"
						lg-text-align="left"
						align-self="auto"
						order="0"
					>
						Drive more profits
						<br />
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						With products designed to help restaurants boost profits, THARASA can help you drive real results so you can take your business to the next level.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="md"
						icon={MdPhonelinkSetup}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
						width="100px"
						height="100px"
						align-self="center"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline4" lg-text-align="left">
						Enjoy choice and flexibility{" "}
						<br />
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						With customizable solutions for all types of businesses — plus the ability to adjust your menu and operating hours in real time — you’re in control of your THARASA partnership.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="gi"
						icon={GiRingingBell}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
						width="100px"
						height="100px"
						align-self="center"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline4" lg-text-align="left">
						Get dedicated support
						<br />
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Get support whenever you need it, including 24/7 live order support via phone and chat lines, account help, and direct communication with assigned drivers.
					</Text>
				</Box>
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
				max-height="550px"
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
					src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03:33:47.187Z"
					srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.187Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.187Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.187Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.187Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.187Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.187Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-53-01-64_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.187Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center" />
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					DELIVERY EXPRESS is an amazing food delivery alapp that I've been using for a while now. It's super convenient and has a wide range of restaurants to choose from. The user interface is really intuitive, making it easy to find and order delicious food. I would definitely recommend..
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
				max-height="550px"
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
					src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03:33:47.172Z"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.172Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.172Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.172Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.172Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.172Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.172Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-03-33-35_1c337646f29875672b5a61192b9010f9.jpg?v=2024-01-18T03%3A33%3A47.172Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text font="--lead" color="--indigo" sm-text-align="center" margin="0px 0px 8px 0px" />
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					I recently tried DELIVERY EXPRESS for the first time, and I must express my satisfaction! The app's user-friendly interface facilitated smooth navigation across a diverse range of restaurants, while the extensive menu options allowed me to explore new culinary delights. The real-time order tracking kept me informed, and the prompt delivery added to the overall positive experience. meals.
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
				max-height="550px"
			>
				<Image
					src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03:33:50.266Z"
					object-fit="cover"
					border-radius="50%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A50.266Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A50.266Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A50.266Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A50.266Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A50.266Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A50.266Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-11-24-08-29-11-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A50.266Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center" />
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					THARASA FOOD ADD Best application for any Non-IT person as its very user-friendly application where everyone can easily order their food online, with good offers also friendly and polite riders...
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
				max-height="550px"
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
					src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03:33:47.195Z"
					object-fit="cover"
					border-radius="50%"
					srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A47.195Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A47.195Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A47.195Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A47.195Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A47.195Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A47.195Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/Screenshot_2023-12-18-07-24-02-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg?v=2024-01-18T03%3A33%3A47.195Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center" />
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					.DELIVERY EXPRESS is a good platform for online food ordering and delivery from a variety of local restaurants. DELIVERY EXPRESS offers a variety of features; the quality of food,and good service ...
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0px 60px 0px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-width="100%"
				>
					Download Our Restaurant App from here
				</Text>
				<Text
					margin="0px 0px 48px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					lg-width="100%"
				>
					An effortlessly navigable app packed with a multitude of user-friendly features.
				</Text>
				<Box
					display="flex"
					align-items="flex-start"
					margin="0px 0px 32px 0px"
					lg-width="50%"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 16px 0px 0px"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						1
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							Download the APK
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Click here
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					align-items="flex-start"
					lg-width="50%"
					lg-padding="0px 0px 0px 16px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						display="flex"
						align-items="center"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						2
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							Go to the play Store
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Click here to redirect to the playstore
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-justify-content="center"
				lg-padding="0px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11:41:54.452Z"
					max-width="100%"
					transform="translateY(10px)"
					transition="transform 0.5s ease-in-out 0s"
					hover-transform="translateY(0px)"
					srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11%3A41%3A54.452Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11%3A41%3A54.452Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11%3A41%3A54.452Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11%3A41%3A54.452Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11%3A41%3A54.452Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11%3A41%3A54.452Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11%3A41%3A54.452Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section background="rgb(44, 0, 81)" padding="100px 0 100px 0" md-padding="40px 0 40px 0">
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
				<Image
					src="https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01:11:40.356Z"
					margin="0px 0px 24px 0px"
					max-width="171px"
					srcSet="https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01%3A11%3A40.356Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01%3A11%3A40.356Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01%3A11%3A40.356Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01%3A11%3A40.356Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01%3A11%3A40.356Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01%3A11%3A40.356Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01%3A11%3A40.356Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<SocialMedia
					facebook="#"
					twitter="#"
					telegram="#"
					instagram="#"
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
			href={"#"}
			target={"_blank"}
		>
			Powered by lightworks
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});