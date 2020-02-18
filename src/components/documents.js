import React from "react"
import { FaCopy } from "react-icons/fa"

const Documents = ({ data }) => (
  <>
    {!!data.documents && !!data.documents.length && (
      <section id="documents">
        <h2>
          <FaCopy /> Documents
        </h2>
        <ul>
          {data.documents.map((doc, index) => (
            <li key={index}>
              <a
                href={doc.filePath.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    )}
  </>
)

export default Documents
