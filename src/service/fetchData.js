import axios from "axios"

// require("dotenv").config()
export default async function fetchData(keyword) {
  // const REACT_APP_API_KEY = "M7ZMCeBnGiD9a2IzG7WRu5f8ffNKQ6Ib"
  const BASE_URL = "http://api.giphy.com"
  // let giphy = giphyInput.value
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
  let response = await axios.get(
    `${BASE_URL}/v1/gifs/search?api_key=${REACT_APP_API_KEY}&q=${keyword}&limit=25`
  )
  // console.log(response.data.data)
  let gif = response.data.data
  return gif
}
