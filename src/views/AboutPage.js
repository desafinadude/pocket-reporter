import React, { Fragment } from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Button from '@material-ui/core/Button';
import OpenUpLogo from '../assets/logos/openup-logo.svg'
import AIPLogo from '../assets/logos/aip-logo.png'
import NqabileLogo from '../assets/logos/nqabile-logo.png'
import SamipLogo from '../assets/logos/samip-logo.png'

const AboutWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 50px;
  font-size: 21px;
  padding: 0px 15px;
  overflow: scroll;
  height: calc(100vh - 100px);
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
    padding: 0;
  }
`;

const AboutButton = styled(Button)`
  width: 100%;
  && {
    margin-bottom: 5px;
    text-transform: none;
    background-color: #73c619;
    color: white;
    
    :hover {
      background-color: #8fd247;
    }
  }
`;

const AboutHead = styled.h2`
  font-size: 16px;
`;

const AboutText = styled.p`
  font-size: 14px;
`;

const AboutList = styled.ul`
  font-size: 14px;
`;

const AboutLogos = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const LogoImage = styled.img`
  margin: 5px;
  max-height: 100px;
  max-width: 30%;
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: ##337ab7;
  font-size: 14px;
`;

const AboutPage = (props) => (
  <Fragment>

    <Header about />

    <AboutWrapper>
      <p>{props.tagline}</p>
      <p>Simply answer the questions as Pocket Reporter guides you through the news gathering process.</p>

      <AboutButton variant="contained" >
          Change language
      </AboutButton>
      <AboutButton variant="contained" >
          Send us feedback
      </AboutButton>

      <AboutHead>Background</AboutHead>
      <AboutText>
        Pocket Reporter is built by
        <AboutLink href="https://openup.org.za/"> OpenUp </AboutLink>
        and is inspired by the
        <AboutLink href="http://nqabile.co.za/virtual"> Virtual Reporter Tool </AboutLink>
        by
        <AboutLink href="http://kanthanpillay.com/content/about"> Kanthan Pillay. </AboutLink>
      </AboutText>

      <AboutButton variant="contained" href="https://pocketreporter.co.za" target="_blank">
        PocketReporter.co.za
      </AboutButton>

      <AboutLogos>
        <LogoImage src={OpenUpLogo} />
        <LogoImage src={AIPLogo} />
        <LogoImage src={NqabileLogo} />
        <LogoImage src={SamipLogo} />
      </AboutLogos>

      <AboutHead>OpenUp</AboutHead>
      <AboutText>OpenUp is a non-profit organisation that promotes informed decision-making that drives social change. Find out more at <AboutLink href="https://openup.org.za/">openup.org.za.</AboutLink></AboutText>

      <AboutHead>Contributors</AboutHead>
      <AboutList>
        <li>Raymond Joseph - <AboutLink href="https://twitter.com/@rayjoe">@rayjoe</AboutLink></li>
        <li>Raoul de Villiers</li>
        <li>Juan Barrios - <AboutLink href="https://twitter.com/@knucklesnack">@knucklesnack</AboutLink></li>
        <li>Thane Thomson</li>
        <li>Mihlali Somi</li>
        <li>Wara Fana</li>
        <li>Javier Vilaboa</li>
      </AboutList>

    </AboutWrapper>

    <Footer />
  </Fragment>
);

export default AboutPage;