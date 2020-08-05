import React from "react"

const Heading = (props) => {
  return (
    <>
      {props.children[0]}
      {props.children[1]}
    </>
  )
}

export default Heading
