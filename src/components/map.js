import React from 'react'

const Map = ({ data }) => {
  const apiKey = 'AIzaSyBI-CY3rt_aGrcyQopvDBrv3_x_jxVxDR4'
  return (
    <section>
      <h3>Find us</h3>
      <iframe
        className="map"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-popups"
        title={data.schemasJson.name}
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${
          data.locationsJson.googlePlaceId
        }&key=${apiKey}`}
        allowFullScreen
      />
    </section>
  )
}

export default Map
