import React from "react";
import Index from "pages/index";
import PrivacyPolicy from "pages/privacyPolicy";
import AboutUs from "pages/aboutUs";
import Terms from "pages/terms";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/privacy-policy' component={PrivacyPolicy}/>
			<Route exact path='/about-us' component={AboutUs}/>
			<Route exact path='/terms' component={Terms}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
