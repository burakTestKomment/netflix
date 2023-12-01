import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request' 
/**
* @description The function `Home` is a component that renders a list of rows with
* titles and URLs. It returns a JSX element that contains:
* 
* 1/ A main component called `<Main/>`
* 2/ A list of rows generated from an array of objects called `requests`, using the
* `map()` method to iterate over the array and create a `<Row>` component for each
* object.
* 
* @returns { object } The output returned by this function is a JavaScript object
* representing an React component that contains multiple rows with titles and URLs
* fetched from the `requests` array.
*/
const Home = () => {
  return (
    <>
      <Main/>
      {requests.map((r,index) => (
        <Row title={r.title} rowID={index} key={index} fetchURL={r.url} />
      ))}
    </>
  )
}

export default Home
