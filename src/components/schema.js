import React from "react"
import Helmet from "react-helmet"

const Schema = ({ data }) => {
  return <Helmet
    script={[
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(data),
      },
    ]}
  />
  }

export default Schema
