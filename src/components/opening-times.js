import React from "react"
import { FaDoorOpen } from "react-icons/fa"

const OpeningTimes = ({ data }) => (
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
          Object.entries(
            data.schema.openingHoursSpecification.reduce((o, x) => {
              o[x.name || ''] = {
                ...o[x.name],
                ...x.dayOfWeek.reduce((days, day) => {
                  days[day] = { opens: x.opens, closes: x.closes }
                  return days
                }, {}),
              }
              return o
            }, {})
          )
            .map(x => ({ name: x[0], days: x[1] }))
            .map((o, i) => (
              <>
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
                      <tr>
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
              </>
            ))}
      </section>
    )}
  </>
)

export default OpeningTimes
