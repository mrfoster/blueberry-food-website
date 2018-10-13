import * as React from 'react'

const OpeningHours = ({ data }) => (
  <section>
    <h3>Opening Hours</h3>
    {data.openingHoursSpecification.map((o, i) => (
      <p key={i}>
        {o.name && (
          <>
            <span>{o.name}</span>
            <br />
          </>
        )}
        {o.length < 7 &&
          o.length > 1 && (
            <>
              {o.dayOfWeek[0]}-{o.dayOfWeek[o.dayOfWeek.length - 1]}
              <br />
            </>
          )}
        {o.opens} - {o.closes} <br />
      </p>
    ))}
  </section>
)

export default OpeningHours
