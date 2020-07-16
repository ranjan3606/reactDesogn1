import React, { Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Search from './components/search/Search'
import Explore from './components/explore/Explore'
import Adventure from './components/adventure/Adventure'
import Booking from './components/booking/Booking'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <Search />
        <Explore />
        <Adventure />
        <Booking />
        <Gallery />
        <Contact />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
