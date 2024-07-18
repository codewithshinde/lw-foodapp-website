import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default () => {
  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl={"privacy-policy"} />
      <Helmet>
        <title>DELIVERY EXPRESS — Food delivery partner</title>
        <meta
          name={"description"}
          content={"Food delivery partner right when you needed"}
        />
        <meta
          property={"og:title"}
          content={"DELIVERY EXPRESS — Food delivery partner"}
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
      {/* <Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Privacy Policy
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="left"
				align-self="flex-end"
				display="block"
				white-space="pre-wrap"
			>
				<br />
				This privacy policy outlines how DELIVERY EXPRESS manages and protects any information you provide when using our website or apps.
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
					Commitment to Privacy:
				</Strong>
				{"\n"}DELIVERY EXPRESS is dedicated to ensuring the protection of your privacy. Any information collected will be used in accordance with this privacy statement.
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
					Policy Updates:
				</Strong>
				{"\n"}DELIVERY EXPRESS may update this policy periodically by revising this page. It is recommended to check this page from time to time to ensure you are satisfied with any changes.
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
					Information We Collect:
				</Strong>
				{"\n"}We may collect the following information:{" "}
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
					Name
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
					Contact information
				</Strong>
				{" "}(phone number and email address)
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
					Demographic information
				</Strong>
				{" "}such as postcode, preferences, and interests
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
					Address for food delivery
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
					How We Use Collected Information:
				</Strong>
				{"\n"}We collect this information to better understand your needs and provide you with improved services, specifically for:
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
					1. Delivery of Food:
					<br />
				</Strong>
				We use the information to facilitate the delivery of food to your home or office.
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
					2. Internal Record Keeping:
				</Strong>
				<br />
				The collected data is used for internal record-keeping purposes.
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
					3. Product and Service Improvement:
				</Strong>
				<br />
				We may use the information to enhance our products and services.
				<br />
				Periodic promotional emails about new products, special offers, or other relevant information may be sent to the email address provided.
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
					4. Market Research:
				</Strong>
				<br />
				At times, we may contact you for market research purposes.
				<br />
				Contact may be made through email, phone, fax, or mail.
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
					Security:
				</Strong>
				{"\n"}We are committed to ensuring the security of your information. To prevent unauthorized access or disclosure, we employ suitable physical, electronic, and managerial procedures. These measures safeguard and secure the information collected online.{"\n\n"}
			</Text>
		</Section> */}
      <Section padding="80px 0" sm-padding="40px 0">
        <Override slot="SectionContent" align-items="center" />
        <Text
          as="h2"
          font="--headline1"
          md-font="--headline2"
          margin="20px 0 0 0"
        >
          Privacy Policy
        </Text>
        <Text
          as="p"
          font="--lead"
          margin="20px 0 20px 0"
          text-align="left"
          align-self="flex-end"
          display="block"
          white-space="pre-wrap"
        >
          DELIVERY EXPRESS Privacy Policy
          <br />
          Last updated March 5, 2024
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
            I. Introduction
            <br />
            II. What Personal Information does DELIVERY EXPRESS collect or
            process
            <br />
            III. How does DELIVERY EXPRESS collect or receive Personal
            Information
            <br />
            IV. How does DELIVERY EXPRESS use Personal Information
            <br />
            V. DELIVERY EXPRESS’s disclosure of Personal Information
            <br />
            VI. Your Privacy Rights and Choices
            <br />
            VII. Security and Retention
          </Strong>
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
            I. Introduction
            <br />
          </Strong>
          At DELIVERY EXPRESS, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how DELIVERY EXPRESS collects, processes, retains,
          and discloses your Personal Information when you use our website,
          mobile applications, and other services.
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
            II. What Personal Information does DELIVERY EXPRESS collect or
            process?
            <br />
          </Strong>
          Personal Information refers to any information that can reasonably
          identify you. We may collect the following categories of Personal
          Information:
          <br />
          - Contact Information: Name, address, email address, phone number, and
          other contact details.
          <br />
          - Account and Profile Information: Username, credentials, privacy
          settings, profile pictures, and other information you provide.
          <br />
          - Identification Documentation: Government-issued identification
          documents for age verification.
          <br />
          - Communications: Messages, chats, emails, and other communications
          with DELIVERY EXPRESS.
          <br />
          - Content: Reviews, ratings, and photos you share on our platform.
          <br />
          - Payment Information: Credit card or debit card details and payment
          methods.
          <br />
          - Activity and Transactions: Order history, transaction details,
          special instructions, and loyalty program information.
          <br />
          - Geolocation Information: Precise location data for delivery
          purposes.
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
            III. How does DELIVERY EXPRESS collect or receive Personal
            Information?
            <br />
          </Strong>
          We collect Personal Information:
          <br />
          - From Users: During account creation, order placement, surveys, and
          other interactions. - Automatically: Through cookies, pixels, and
          similar technologies. - From Legal Claims and Orders: In response to
          legal requests and disputes.
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
            IV. How does DELIVERY EXPRESS use Personal Information?
            <br />
          </Strong>
          We use Personal Information:
          <br />
          - To Provide and Customize Services: Facilitating orders, customizing
          experiences, and providing support. - For Development and Improvement:
          Analyzing usage patterns and enhancing our services. - For
          Authentication and Security: Verifying accounts and protecting against
          fraud. - For Legal Compliance: Complying with legal obligations and
          responding to requests.
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
            V. DELIVERY EXPRESS’s disclosure of Personal Information?
            <br />
          </Strong>
          We may disclose Personal Information:
          <br />
          - To Service Providers: For operational purposes and service delivery.
          - To Dashers: Facilitating order deliveries. - To Merchants: For order
          preparation and delivery. - Publicly: Sharing reviews and content
          posted by users. - To Marketing Partners: For advertising purposes. -
          For Corporate Transactions: In the event of mergers or acquisitions. -
          To Government Authorities: In compliance with legal obligations.
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
            VI. Your Privacy Rights and Choices
            <br />
          </Strong>
          You have the right to:
          <br />
          - Access and Portability: Request access to your Personal Information.
          - Deletion: Ask for deletion of your Personal Information. -
          Correction: Correct inaccuracies in your Personal Information. -
          Opt-Out of Sale or Sharing: Opt-out of targeted advertising. -
          Withdraw Consent: Withdraw consent for processing where applicable.
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
            VII. Security and Retention
            <br />
          </Strong>
          <br />
          At DELIVERY EXPRESS, we prioritize the security and integrity of your
          personal information. We employ robust measures to protect data
          against unauthorized access, disclosure, alteration, and destruction.
          Here's how we ensure the security of your data:
          <br />
          <br />
          Encryption: We use encryption technologies to secure data transmission
          and storage, ensuring that sensitive information remains protected
          from interception and unauthorized access.
          <br />
          <br />
          Access Control: Access to personal information is restricted to
          authorized personnel only. We implement stringent access controls and
          authentication mechanisms to prevent unauthorized entry into our
          systems.
          <br />
          <br />
          Regular Audits and Monitoring: We conduct regular audits and
          monitoring of our systems to detect and mitigate any security
          vulnerabilities or breaches promptly.
          <br />
          <br />
          Data Minimization: We only collect and retain the minimum amount of
          personal information necessary to fulfill the purposes outlined in
          this privacy policy. Unnecessary data is securely deleted or
          anonymized to reduce the risk of unauthorized access.
          <br />
          <br />
          Employee Training: Our employees undergo comprehensive training on
          data security and privacy practices to ensure they understand their
          responsibilities in safeguarding personal information.
          <br />
          <br />
          Secure Infrastructure: We utilize secure infrastructure and data
          centers to store and process personal information, adhering to
          industry best practices and standards for data security.
          <br />
          <br />
          Incident Response Plan: In the event of a data breach or security
          incident, we have an established incident response plan in place to
          promptly address the issue, mitigate any impact, and notify affected
          individuals as required by law.
          <br />
          <br />
          Regular Updates and Patching: We regularly update and patch our
          systems and software to address known security vulnerabilities and
          protect against emerging threats.
          <br />
          <br />
          Third-Party Security Assessments: We conduct security assessments of
          third-party service providers and vendors to ensure they adhere to
          stringent security standards and practices.
          <br />
          <br />
          Data Retention Practices: We have defined data retention policies and
          procedures in place to govern the retention and deletion of personal
          information. Data is retained only for as long as necessary to fulfill
          the purposes outlined in this privacy policy and in compliance with
          applicable laws and regulations.
          <br />
          <br />
          By implementing these security measures and practices, Tharasa Food
          Adda is committed to maintaining the confidentiality, integrity, and
          availability of your personal information, protecting it from
          unauthorized access, misuse, or loss.
          <br />
          <br />
          These measures ensure that your data remains safe and secure
          throughout its lifecycle, from collection to disposal, and uphold our
          commitment to protecting your privacy and maintaining your trust in
          our services. To exercise your rights or for inquiries, contact us at
          privacy@DELIVERY EXPRESS.com.
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
