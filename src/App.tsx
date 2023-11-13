// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import StickyNavBar from './components/StickyNavBar'
import SubsidiariesNav from './components/SubsidiariesNav'
import TopStripAdsDesktop from './components/TopStripAdsDesktop'

function App() {

  return (
    <>
      <TopStripAdsDesktop />
      <SubsidiariesNav />
      <StickyNavBar />
      <main>

      </main>
      <Footer />
    </>
  )
}

export default App
