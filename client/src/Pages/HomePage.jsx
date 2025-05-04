import React from 'react'
import HaldiPage from './HaldiPage'
import MehndiPage from './MehndiPage'
// import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import HeaderCopy from '../layouts/HeaderCopy'
import WeddingPage from './WeddingPage'

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeaderCopy />
      <HaldiPage />
      {/* <MehndiPage /> */}
      <WeddingPage />
      <Footer />
    </div>
  )
}

export default HomePage
