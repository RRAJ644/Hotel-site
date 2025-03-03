import React, { useState } from 'react'
import './Hotel.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/Footer/Footer'
import { set } from 'date-fns'
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const handleOpen = (i) =>{
    setSlideNumber(i)
    setOpen(true)
  }

  
  const handleMove = (direction)=>{
    let newSlideNumber;
    if(direction == "l"){
      newSlideNumber = slideNumber===0? 5: slideNumber-1
    }
    else{
      newSlideNumber = slideNumber===5? 0: slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }

  

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className='hotel-cont'>
        {
          open && <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} className="close"/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className='slider-wrapper'>
              <img src={photos[slideNumber].src} alt='' className='slider-img'/>
            </div>
            
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        }
        <div className='hotel-wrapper'>
          <button className='booknow'>
            Reserve or Book Now!
          </button>
          
          <h1 className='hotel-title'>Grand Hotel</h1>
          <div className='hotel-address'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 New york</span>
          </div>

          <span className="hotel-distance">
            Excellent location - 500m from center
          </span>

          <span className="hotel-price-highlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          
          <div className="hotel-images">
            {photos.map((photo, i) => (
              <div className="hotel-img-wrapper" key={i}>
                <img
                  src={photo.src}
                  alt=""
                  className="hotel-img"
                  onClick={()=>handleOpen(i)}
                />
              </div>
            ))}
          </div>

          <div className='hotel-details'>
            <div className='hotel-details-text'>
              <h1 className="hotel-title">Stay in the heart of City</h1>
                <p className="hotel-desc">
                  Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                  Street Apartments has accommodations with air conditioning and
                  free WiFi. The units come with hardwood floors and feature a
                  fully equipped kitchenette with a microwave, a flat-screen TV,
                  and a private bathroom with shower and a hairdryer. A fridge is
                  also offered, as well as an electric tea pot and a coffee
                  machine. Popular points of interest near the apartment include
                  Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                  airport is John Paul II International Kraków–Balice, 16.1 km
                  from Tower Street Apartments, and the property offers a paid
                  airport shuttle service.
                </p>
            </div>

            <div className='hotel-details-price'>
            <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div> 
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Hotel