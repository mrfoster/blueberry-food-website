import React from 'react'
import CookieConsent from './cookie-consent'
import './layout.scss'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Blueberry Food Company"
      meta={[
        {
          name: 'description',
          content: "kbjhkvb kgkjhb kjhb kj",
        },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <div className="container card">{children}</div>

    <CookieConsent />
  </>
)

export default Layout
