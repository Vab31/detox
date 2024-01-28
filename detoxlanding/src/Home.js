
import React from 'react'
import Hero from './component/hero';
import Main from './component/main';
import VideoPlayer from './component/video';
import Footer from './component/footer';
import Howcanjoin from './component/how_can_join';
import Review from './component/review';
import Whatyouwill from './component/whatyouwill';
import NavBar from "./component/nav";
import Benefit from './component/benefit';

export default function Home() {
  return (
    <div>
      <NavBar/>
        <Hero />
      <VideoPlayer />
      <Whatyouwill/>
      <Howcanjoin />
      <Main />
      <Benefit/>
      <Review />
      <Footer />
    </div>
  )
}




