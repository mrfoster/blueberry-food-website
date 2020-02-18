import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"

const Map = ({ data }) => {
  const apiKey = "AIzaSyBI-CY3rt_aGrcyQopvDBrv3_x_jxVxDR4"
  return (
    data.googlePlaceId && (
      <section id="map">
        <h2>
          <FaMapMarkerAlt /> Find us
        </h2>
        <iframe
          className="map"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin allow-popups"
          title={data.name}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${data.googlePlaceId}&key=${apiKey}`}
          allowFullScreen
        />
      </section>
    )
  )
}

export default Map
