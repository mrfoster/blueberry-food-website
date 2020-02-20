import React from 'react'
import { FaAddressCard } from 'react-icons/fa'

const Contact = ({ data }) => {
  const address = data.address
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
        {addressLines
          .filter(x => !!x)
          .map((l, i) => (
            <span key={i}>
              {l}
              <br />
            </span>
          ))}
      </address>
      {data.telephone && (
        <p>
          <em>Tel:</em>{' '}
          <a href={`tel:${data.telephone}`}>{data.telephone}</a>
        </p>
      )}
      {data.email && (
        <p>
          <em>Email:</em>{' '}
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </p>
      )}

      {/* {data.data.vcf && (
        <p>
          <a href={data.data.vcf.publicURL}>Add to contacts</a>
        </p>
      )} */}
    </section>
  )
}

export default Contact
