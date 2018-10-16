import * as React from 'react'
import { FaDoorOpen } from 'react-icons/fa'

const OpeningHours = ({ data }) => (
  <section>
    <h3>
      <FaDoorOpen /> Opening Hours
    </h3>
    {data.openingHoursSpecification.map((o, i) => (
      <p key={i}>
        {o.name && (
          <>
            <span>{o.name}</span>
            <br />
          </>
        )}
        {o.dayOfWeek.length < 7 &&
          o.dayOfWeek.length > 1 && (
            <>
              {o.dayOfWeek[0]} - {o.dayOfWeek[o.dayOfWeek.length - 1]}
              <br />
            </>
          )}
        {o.opens} - {o.closes} <br />
      </p>
    ))}
  </section>
)

export default OpeningHours
