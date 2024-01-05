import React from "react"
import "./Home.css"
import SliderHome from "./Slider"
import SideBar from "./SideBar"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <SideBar />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
