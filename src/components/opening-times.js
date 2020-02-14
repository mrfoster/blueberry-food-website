import React from "react"
import { FaDoorOpen } from "react-icons/fa"

const OpeningTimes = ({ data }) => {
  const openingTimes = Object.values(
    data.schema.openingHoursSpecification.reduce((o, x) => {
      const key = `${x.name} ${x.validFrom} ${x.validThrough}`
      o[key] = {
        ...x,
        id: key,
        validFrom: new Date(x.validFrom),
        validThrough: new Date(x.validThrough),
        days: {
          ...o[key]?.days,
          ...x.dayOfWeek.reduce((days, day) => {
            days[day] = { opens: x.opens, closes: x.closes }
            return days
          }, {}),
        },
      }
      return o
    }, {})
  )

  return (
    <>
      {(data.schema.openingHoursSpecification || data.page.openingTimes) && (
        <section id="openingTimes">
          <h2>
            <FaDoorOpen /> Opening Times
          </h2>
          {data.page.openingTimes && (
            <p dangerouslySetInnerHTML={{ __html: data.page.openingTimes }}></p>
          )}

          {data.schema.openingHoursSpecification &&
            openingTimes.map((o, i) => (
              <div key={o.id}>
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
                    ].map(day => (
                      <tr key={day}>
                        <th>{day}</th>
                        <td>
                          {(!o.days[day] ||
                            o.days[day].opens === o.days[day].closes) && (
                            <>Closed</>
                          )}
                          {o.days[day] &&
                            o.days[day].opens !== o.days[day].closes && (
                              <>
                                {o.days[day].opens} - {o.days[day].closes}
                              </>
                            )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
        </section>
      )}
    </>
  )
}

export default OpeningTimes
