import React from "react"

export default function Imagelist(props) {
  // console.log(props.imagesResult.id)
  // gif[i].images.fixed_height_small.url
  const { imagesResult } = props
  // console.log(imagesResult[0].images)
  console.log(props.handleDelete)
  return (
    <div className="wrapper">
      {imagesResult.map((img) => (
        <img
          onClick={() => props.handleDelete(img.id)} //call thefunbction here
          src={img.images.fixed_height_small.url}
          alt="gif"
          key={img.id}
          id={img.id}
        ></img>
      ))}
    </div>
  )
}
