import React, { useState, useEffect } from "react"
import fetchData from "../service/fetchData"
import Imagefilter from "./Imagefilter"
import Imagelist from "./Imagelist"

export default function ImageContainer() {
  const [imagesResult, setImagesResult] = useState([])
  // const [keyWords, setKeywords] = useState([])

  // async function serachGif(keyword) {
  //   try {
  //     const res = await fetchData(keyword)

  //     // setImagesResult(searchingResult)
  //   } catch (err) {
  //     console.log("err")
  //   }
  // }
  //加一个删除 加一个分页 分页用useEffect
  // serachGif("heart")
  async function handleOnClick(keywords) {
    // console.log(keyWords)

    try {
      const searchingResult = await fetchData(keywords)
      // console.log(searchingResult)
      setImagesResult(searchingResult)
    } catch (err) {
      console.log(err)
    }
  }

  //容器只装几个组件
  // allSearchAdvice.map((x, index) => (
  //   <p onClick={() => deleteAdvice(x.id)} key={x.id}>
  //     {x.advice}
  //   </p>
  // ))
  function handleDelete(id) {
    //这里的id应该是map得到的，下一层的id应该是click得到的 //必须加一个回调不然每一打印
    const deletedRes = imagesResult.filter((x) => x.id != id)
    console.log(id)
    setImagesResult(deletedRes)
  }
  const id = ""
  return (
    <div>
      <Imagefilter handleOnClick={handleOnClick} />
      <Imagelist
        imagesResult={imagesResult} //这里面已经有id
        handleDelete={handleDelete} //不能拼摆无辜出来一个id 会报错 pass function no call it
      />
    </div>
  )
}
