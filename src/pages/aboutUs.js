import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, LinkBox, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about-us"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01:11:40.356Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01:11:40.356Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01:11:40.356Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01:11:40.356Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01:11:40.356Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/657f8e4c009abe001f00ae90/images/logo_secondary.png?v=2023-12-22T01:11:40.356Z"} />
			<meta name={"msapplication-TileColor"} content={"#400048"} />
		</Helmet>
		<Section padding="80px 0" sm-padding="40px 0" background="rgba(0, 0, 0, 0)" color="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Section padding="80px 0 80px 0" lg-padding="56px 0 56px 0" sm-padding="32px 0 32px 0" background="--color-light">
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					width="100%"
					margin="0px 0px 16px 0px"
					justify-content="flex-start"
					md-margin="0px 0px 16px 0px"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						lg-width="100%"
					>
						<Image
							src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
							border-radius="24px"
							max-width="100%"
							max-height="522px"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="0% 30%"
							sm-max-height="213px"
							srcSet="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</LinkBox>
			</Section>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="left"
				white-space="normal"
			>
				THARASA FOOD ADDA is a cutting-edge delivery service accessible through mobile applications, connecting customers with a diverse array of restaurants and retailers. Our platform provides a seamless experience for users to explore menus and food offerings, placing orders effortlessly and having them delivered directly to their doorstep.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					What Sets Us Apart:
				</Strong>
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Restaurant Showcase:
				</Strong>
				<br />
				We partner with an extensive network of restaurants and retailers, allowing them to showcase their menus through our mobile applications.
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					<br />
					Convenience Redefined:
				</Strong>
				<br />
				Customers can order their favorite food or groceries anytime, anywhere, using their mobile devices or tablets. Whether it's fast food or everyday essentials, THARASA FOOD ADDA ensures a convenient and accessible ordering experience.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Effortless Ordering:
				</Strong>
				<br />
				Our user-friendly mobile applications eliminate the need for traditional phone orders. Customers can easily navigate, browse menus, and place orders with a few simple taps.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Fast and Reliable Delivery:
				</Strong>
				<br />
				We prioritize timely and reliable delivery services, ensuring that orders reach customers promptly and in excellent condition.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					New Heights of Convenience:
				</Strong>
				<br />
				In addition to restaurant deliveries, THARASA FOOD ADDA introduces grocery delivery services. Grocery stores partnering with our platform offer unprecedented convenience to shoppers, enabling them to order groceries at their fingertips.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Why Choose THARASA FOOD ADDA:
				</Strong>
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Streamlined Process:
				</Strong>
				<br />
				Avoid the hassle of calling and waiting on the phone. Our platform streamlines the ordering process, making it efficient and hassle-free.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Wider Choices:
				</Strong>
				<br />
				Access a variety of cuisines and grocery options, expanding your choices and catering to diverse preferences.
				<br />
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Innovation in Grocery Shopping:
				</Strong>
				<br />
				Experience the future of grocery shopping with our innovative grocery delivery feature, enhancing the convenience of your everyday life.
				<br />
				<br />
				Join THARASA FOOD ADDA for a revolutionized approach to food and grocery delivery. Explore endless possibilities and elevate your dining and shopping experiences with us.{"\n\n"}
			</Text>
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