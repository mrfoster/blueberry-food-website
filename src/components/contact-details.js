import * as React from 'react'

const ContactDetails = ({ data }) => {
  const address = data.address
  const addressLines = [
    address.streetAddress,
    address.addressLocality,
    address.addressRegion,
    address.postalCode,
  ]

  return (
    <section>
      <h3>Contact us</h3>
      <em>Address:</em>
      <address>
        {addressLines.filter(x => !!x).map((l, i) => (
          <span key={i}>
            {l}
            <br />
          </span>
        ))}
      </address>
      <em>Tel:</em> <a href={`tel:${data.telephone}`}>{data.telephone}</a> <br />
      <em>Email:</em> <a href={`mailto:${data.email}`}>{data.email}</a>
    </section>
  )
}

export default ContactDetails
