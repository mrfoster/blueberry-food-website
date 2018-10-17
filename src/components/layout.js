import React from 'react'
import CookieConsent from './cookie-consent'
import './layout.scss'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import './animate.css'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Blueberry Food Company"
      meta={[
        {
          name: 'description',
          content:
            'Blueberry Food Company specialises in creating the most delicious, tailor made buffets. We cater for both private parties and for business lunches or functions.',
        },
        { property: 'og:type', content: 'website' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <div className="page">
      <Fade>{children}</Fade>
    </div>

    <CookieConsent />
  </>
)

export default Layout
