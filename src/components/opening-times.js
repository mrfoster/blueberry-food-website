import React from "react"
import { FaDoorOpen } from "react-icons/fa"

const OpeningTimes = ({ data }) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const openingHours = data.openingHours
    .map(x => ({
      ...x,
      validFrom: x.validFrom ? new Date(x.validFrom) : null,
      validThrough: x.validThrough ? new Date(x.validThrough) : null,
    }))
    .filter(x => !x.validThrough || x.validThrough >= today)
    .map(x => ({ ...x, sort: x.validFrom?.getTime() }))
    .sort((a, b) => (a.sort > b.sort ? 1 : a.sort < b.sort ? -1 : 0))
    .slice(0, 2)

  return (
    (openingHours.length || data.openingHoursContent) && (
      <section id="openingTimes">
        <h2>
          <FaDoorOpen /> Opening Times
        </h2>
        {data.openingHoursContent && (
          <p dangerouslySetInnerHTML={{ __html: data.openingHoursContent }}></p>
        )}

        {openingHours.map((o, i) => (
          <div key={i}>
            {o.name && <h3>{o.name}</h3>}

            <table>
              <tbody>
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map(dayName => {
                  const day = o[dayName.toLowerCase()]
                  return (
                    <tr key={dayName}>
                      <th>{dayName}</th>
                      <td>
                        {(!day || day.opens === day.closes) && <>Closed</>}
                        {day && day.opens !== day.closes && (
                          <>
                            {day.opens} - {day.closes}
                          </>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    )
  )
}

export default OpeningTimes
