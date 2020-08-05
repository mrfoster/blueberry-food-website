import React, { Component } from "react"

class CookieConsent extends Component {
  dismiss = () => {
    localStorage.setItem("cookieConsentStatus", "dismiss")
    this.setState({ cookieConsentStatus: "dismiss" })
  }

  componentDidMount() {
    this.setState({
      cookieConsentStatus: localStorage.getItem("cookieConsentStatus"),
    })
  }

  render() {
    return (
      this.state &&
      !this.state.cookieConsentStatus && (
        <div className="cookie-consent">
          <p>
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <button onClick={this.dismiss}>Got it!</button>
        </div>
      )
    )
  }
}

export default CookieConsent
