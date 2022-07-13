import React, { useState, useEffect } from "react"

export default function Imagefilter(props) {
  const [keywords, setKeywords] = useState("")
  function onChangehandle(event) {
    setKeywords(event.target.value)
  }

  return (
    <div>
      <input
        // value={props.value}
        placeholder="Please serach Keywords here"
        onChange={onChangehandle}
      ></input>
      <button onClick={() => props.handleOnClick(keywords)}>Search Btn</button>
    </div>
  )
}
