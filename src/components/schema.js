import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Schema = ({ data }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const urlResolve = path => `${site.siteMetadata.siteUrl}${path}`

  // https://schema.org/Thing
  const thing = {
    url: urlResolve(`/${data.slug}`),
    name: data.title,
    description: data.description,
    photo: data.images?.length
      ? data.images.map(image => ({
          "@type": "ImageObject",
          url: image.filePath.publicURL,
          name: image.name,
        }))
      : undefined,
  }

  // https://schema.org/Organization
  const organisation = {
    email: data.email,
    telephone: data.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
  }

  // https://schema.org/Place
  const place = data.geo && {
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
  }

  // https://schema.org/LocalBusiness
  const localBusiness = data.openingHours && {
    openingHoursSpecification: data.openingHours
      .map(o =>
        [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ]
          .map(day => ({
            name: o.name,
            validFrom: o.validFrom,
            validThrough: o.validThrough,
            day,
            ...o[day.toLowerCase()],
          }))
          .reduce((o, d) => {
            const key = `${d.opens} ${d.closes}`
            const value = o[key] || {
              "@type": "OpeningHoursSpecification",
              ...d,
              dayOfWeek: [],
            }

            value.dayOfWeek = [...value.dayOfWeek, d.day]

            const { day, ...noDay } = value
            o[key] = noDay
            return o
          }, {})
      )
      .reduce((a, o) => a.concat(Object.values(o)), []),
  }

  // https://schema.org/FoodEstablishment
  const menus = (
    data.documents?.filter(d => d.name.toLowerCase().includes("menu")) || []
  ).map(d => urlResolve(d.filePath.publicURL))

  const foodEstablishment = menus.length && {
    hasMenu: menus,
  }

  const provider = {
    ...organisation,
    ...place,
    ...localBusiness,
    ...foodEstablishment,
  }

  const schema = {
    "@context": "http://schema.org",
    "@type": data.schema.type,
    "@id": urlResolve(`/${data.slug}`),
    ...thing,
    provider: data.schema.nestedProvider && {
      "@type": "Organization",
      name: data.name,
      ...provider,
    },
    ...(!data.schema.nestedProvider && provider),
    ...data.schema.meta,
  }

  // return (
  //   <pre style={{ fontSize: "0.6em" }}>{JSON.stringify(schema, null, 4)}</pre>
  // )

  return (
    <Helmet
      script={[
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ]}
    />
  )
}

export default Schema
