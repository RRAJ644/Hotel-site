import React, { useState } from 'react'
import './List.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import {format} from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/Searchitem/SearchItem'

const List = () => {
  const location = useLocation()
  
  const [destination, setDestination] = useState(location.state.destination)
  
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState(location.state.date)

  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='list-cont'>
        <div className='list-wrapper'>
          <div className='list-search'>
            <h1 className='list-search-title'>Search</h1>
            
            <div className='list-search-item'>
              <label>Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            
            <div className='list-search-item'>
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(prev=>!prev)} className='header-search-text'>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
                { openDate && <DateRange
                  onChange={item=>setDate(item.selection)}
                  minDate={new Date()}
                  ranges={date}
                />
                }
            </div>

            <div className='list-search-item'>
              <label id='options'>Option</label>
              <div className='list-search-options'>
                
                <div className='list-search-option-item'>
                  <span className='list-search-option-text'>
                    Minimum Price
                    <small>per night</small>
                  </span>
                  <input type="number" min={1} className='list-search-option-input'></input>
                </div>

                <div className='list-search-option-item'>
                  <span className='list-search-option-text'>
                    Maximum Price
                    <small>per night</small>
                  </span>
                  <input type="number" min={1} className='list-search-option-input'></input>
                </div>

                <div className='list-search-option-item'>
                  <span className='list-search-option-text'>
                    Adult
                  </span>
                  <input type="number" min={1} className='list-search-option-input' placeholder={options.adult}></input>
                </div>

                <div className='list-search-option-item'>
                  <span className='list-search-option-text'>
                    Children
                  </span>
                  <input type="number" min={0} className='list-search-option-input' placeholder={options.children}></input>
                </div>

                <div className='list-search-option-item'>
                  <span className='list-search-option-text'>
                    Room
                  </span>
                  <input type="number" min={1} className='list-search-option-input' placeholder={options.room}></input>
                </div>
              </div>
              </div>
              <button>Search</button>
          </div>
          <div className='list-result'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default List