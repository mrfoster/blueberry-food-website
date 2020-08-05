import React from "react"
import CookieConsent from "./cookie-consent"
import "./layout.scss"
import Fade from "react-reveal/Fade"
import "./animate.css"

const Layout = ({ children }) => (
  <>
    <main className="page">
      <Fade>{children}</Fade>
    </main>

    <CookieConsent />
  </>
)

export default Layout
