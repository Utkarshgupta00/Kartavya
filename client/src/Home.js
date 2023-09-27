import React from 'react'
import BlinkingMessage from './component/Blinking.js';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <BlinkingMessage text="Go to Example" url="https://example.com" />
    </>
  )
}

export default Home