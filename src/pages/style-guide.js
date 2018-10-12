import * as React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Nav from '../components/nav'
import OpeningHours from '../components/opening-hours'
import Map from '../components/map'
import SocialLinks from '../components/social-links'
import CookieConsent from '../components/cookie-consent'
import Layout from '../components/layout'

const StyleGuide = () => (
  <Layout>
    <h1>Typography</h1>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>

    <h1>Components</h1>

    <h2>Banner</h2>
    <Banner />
    <h2>Nav</h2>
    <Nav />
    <h2>Opening hours</h2>
    <OpeningHours />
    <h2>Map</h2>
    <Map />
    <h2>Social links</h2>
    <SocialLinks />
    <h2>Cookie consent</h2>
    <CookieConsent />
  </Layout>
)

export default StyleGuide
