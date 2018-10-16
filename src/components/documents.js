import * as React from 'react'

const Documents = ({ data }) => {
  return (
    <>
      {data.page.documents.length && (
        <section>
          <h3>Documents</h3>
          <ul>
            {data.page.documents.map((doc, index) => (
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
}

export default Documents
