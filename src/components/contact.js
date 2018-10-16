import * as React from 'react'
import { FaAddressCard, FaPhone, FaHome, FaAt } from 'react-icons/fa'
const Contact = ({ data }) => {
  const address = data.address
  const addressLines = [
    address.streetAddress,
    address.addressLocality,
    address.addressRegion,
    address.postalCode,
  ]

  return (
    <section>
      <h3><FaAddressCard /> Contact us</h3>
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

      <a href="/arc-leisure-matlock/contact.vcf">Add</a>
    </section>
  )
}

export default Contact
