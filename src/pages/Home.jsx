import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
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
