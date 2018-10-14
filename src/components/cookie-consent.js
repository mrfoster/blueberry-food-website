import React, { Component } from 'react'

class CookieConsent extends Component {
  constructor(props) {
    super(props)
    const cookieConsentStatus =
      typeof window !== 'undefined' &&
      localStorage.getItem('cookieConsentStatus')
    this.state = { cookieConsentStatus: cookieConsentStatus }
  }

  dismiss = () => {
    localStorage.setItem('cookieConsentStatus', 'dismiss')

    this.setState({ cookieConsentStatus: 'dismiss' })
  }

  render() {
    return (
      !this.state.cookieConsentStatus && (
        <div>
          This website uses cookies to ensure you get the best experience on our
          website.
          <button onClick={this.dismiss}>
            Got it!
          </button>
        </div>
      )
    )
  }
}

export default CookieConsent
