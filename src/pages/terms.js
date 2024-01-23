import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default () => {
  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl={"terms"} />
      <Helmet>
        <title>Tharasafoodadda — Food delivery partner</title>
        <meta
          name={"description"}
          content={"Food delivery partner right when you needed"}
        />
        <meta
          property={"og:title"}
          content={"Tharasafoodadda — Food delivery partner"}
        />
        <meta
          property={"og:description"}
          content={"Food delivery partner right when you needed"}
        />
        <meta
          property={"og:image"}
          content={
            "https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"
          }
        />
        <link
          rel={"shortcut icon"}
          href={
            "https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"
          }
          type={"image/x-icon"}
        />
        <link
          rel={"apple-touch-icon"}
          href={
            "https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"
          }
        />
        <link
          rel={"apple-touch-icon"}
          sizes={"76x76"}
          href={
            "https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"
          }
        />
        <link
          rel={"apple-touch-icon"}
          sizes={"152x152"}
          href={
            "https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"
          }
        />
        <link
          rel={"apple-touch-startup-image"}
          href={
            "https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"
          }
        />
        <meta
          name={"msapplication-TileImage"}
          content={
            "https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"
          }
        />
        <meta name={"msapplication-TileColor"} content={"#000848"} />
      </Helmet>
      <Section padding="80px 0" sm-padding="40px 0">
        <Override slot="SectionContent" align-items="center" />
        <Text
          as="h2"
          font="--headline1"
          md-font="--headline2"
          margin="20px 0 0 0"
        >
          Terms & Conditions
        </Text>
        <Text
          as="p"
          font="--lead"
          margin="20px 0 20px 0"
          text-align="left"
          white-space="normal"
        >
          <br />
          <br />
          Welcome to THARASA FOOD ADDA! Before using our services, please
          carefully read the following terms and conditions. By accessing or
          using our platform, you agree to be bound by these terms. If you
          disagree with any part of these terms, you may not use our services.
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
            1. Service Usage:
          </Strong>
          <br />
          THARASA FOOD ADDA provides a platform for users to access food and
          grocery delivery services.
          <br />
          <br />
          Users must be at least 18 years old to use our services.
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
            2. Account Registration:
          </Strong>
          <br />
          Users are required to create an account to access certain features.
          <br />
          You are responsible for maintaining the confidentiality of your
          account information.
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
            3. Order Placement:
          </Strong>
          <br />
          Users can place orders for food and groceries through our platform.
          <br />
          Prices, availability, and delivery times are subject to change.
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
            4. Payment:
          </Strong>
          <br />
          Payments can be made through the provided payment methods.
          <br />
          Users are responsible for accurate payment information.
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
            5. Delivery:
          </Strong>
          <br />
          THARASA FOOD ADDA aims to provide timely and reliable delivery
          services.
          <br />
          Delivery times may vary based on location and demand.
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
            6. Cancellations and Refunds:
          </Strong>
          <br />
          Users can cancel orders within a specified timeframe.
          <br />
          Refunds are subject to our refund policy.
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
            7. User Conduct:
          </Strong>
          <br />
          Users must comply with all applicable laws and regulations.
          <br />
          Inappropriate behavior may result in account suspension.
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
            8. Privacy:
          </Strong>
          <br />
          THARASA FOOD ADDA values user privacy. Please refer to our Privacy
          Policy for details.
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
            9. Intellectual Property:
          </Strong>
          <br />
          All content on our platform is the intellectual property of THARASA
          FOOD ADDA.
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
            10. Modification of Terms:
          </Strong>
          - THARASA FOOD ADDA reserves the right to modify these terms at any
          time.
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
            11. Termination:
          </Strong>
          - THARASA FOOD ADDA may terminate or suspend access to our services
          without prior notice.
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
            12. Governing Law:
          </Strong>
          - These terms are governed by and construed in accordance with the
          laws of [Your Country/Region].
          <br />
          <br />
          By using THARASA FOOD ADDA, you agree to comply with these terms and
          conditions. If you have any questions or concerns, please contact our
          customer support.
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
        href={"#"}
        target={"_blank"}
      >
        Powered by lightworks
      </Link>
      <RawHtml>
        <style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
          {
            ":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"
          }
        </style>
      </RawHtml>
    </Theme>
  );
};
