import React, { Component } from 'react'

class CookieConsent extends Component {
  constructor(props) {
    super(props)
    this.state = { cookieConsentStatus: 'unknown' }
  }

  dismiss = () => {
    localStorage.setItem('cookieConsentStatus', 'dismiss')
    this.setState({ cookieConsentStatus: 'dismiss' })
  }

  componentDidMount() {
    this.setState({
      cookieConsentStatus: localStorage.getItem('cookieConsentStatus'),
    })
  }

  render() {
    return (
      !this.state.cookieConsentStatus && (
        <div>
          This website uses cookies to ensure you get the best experience on our
          website.
          <button onClick={this.dismiss}>Got it!</button>
        </div>
      )
    )
  }
}

export default CookieConsent
