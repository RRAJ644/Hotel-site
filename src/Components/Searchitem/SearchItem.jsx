import React from 'react'
import './SearchItem.css'
const SearchItem = () => {
  return (
    <div className='SearchItem'>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="SearchItem-img"
      />

      <div className='SearchItem-desc'>
        <h1 className="SearchItem-title">Tower Street Apartments</h1>
          <span className="SearchItem-distance">500m from center</span>
          <span className="SearchItem-taxiOp">Free airport taxi</span>
          <span className="SearchItem-subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="SearchItem-features">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="SearchItem-cancelOp">Free cancellation </span>
          <span className="SearchItem-cancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
      </div>

      <div className='SearchItem-details'>
       
        <div className='SearchItem-rating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className='SearchItem-detailtexs'>
          <span className='SearchItem-price'>123</span>
          <span className='SearchItem-TaxiOp'>Includes taxes and fees</span>
          <button className='SearchItem-checkBtn'>See availability</button>
        </div>

      </div>

    </div>
  )
}

export default SearchItem