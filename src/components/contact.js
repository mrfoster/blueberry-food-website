import * as React from 'react'
import { FaAddressCard } from 'react-icons/fa'

const Contact = ({ data }) => {
  const address = data.schema.address
  const addressLines = [
    address.streetAddress,
    address.addressLocality,
    address.addressRegion,
    address.postalCode,
  ]

  return (
    <section id="contact">
      <h2>
        <FaAddressCard /> Contact us
      </h2>
      <em>Address:</em>
      <address>
        {addressLines.filter(x => !!x).map((l, i) => (
          <span key={i}>
            {l}
            <br />
          </span>
        ))}
      </address>
      <em>Tel:</em>
      <a href={`tel:${data.schema.telephone}`}>{data.schema.telephone}</a> <br />
      <em>Email:</em> <a href={`mailto:${data.schema.email}`}>{data.schema.email}</a>
      <br />
      {data.page.vcf && <a href={data.page.vcf.publicURL}>Add to contacts</a>}
    </section>
  )
}

export default Contact
