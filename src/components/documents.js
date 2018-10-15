import * as React from 'react'

const Documents = ({ data }) => {
  return (
    <>
      {data.page.documents.length && (
        <section>
          <h3>Documents</h3>
          {data.page.documents.map((doc, index) => (
            <a
              key={index}
              href={doc.filePath.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {doc.name}
            </a>
          ))}
        </section>
      )}
    </>
  )
}

export default Documents
