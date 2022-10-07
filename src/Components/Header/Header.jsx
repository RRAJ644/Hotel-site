import React from 'react'
import './Header.css'
import {faBed, faCar, faTaxi, faPlane, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import {format} from "date-fns"

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import List from '../../pages/List/List';
import { useNavigate } from 'react-router-dom';
const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOption = (name, operation)=>{
        setOptions( (prev)=>{return{
            ...prev , [name]: operation === "i"? options[name]+1: options[name]-1
        }})
    }

    
    const navigate  = useNavigate()

    const handleSearch =()=>{
        navigate("/hotels", {state:{destination, date, options}})
    }

    


    return (
    <div className='header'>
        <div className={type==="list" ? "header-cont listMode": "header-cont"}>
            <div className='header-list'>
                    
                 <div className='header-list-item active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                    
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                    
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                    
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>

            </div>


            { type!=="list" && <>
            
            <h1 className='header-title'>
                A lifetime of discounts? It's a Genius.
            </h1>
            <p className='header-desc'>
                Get rewarded for your travels - unlock instant savings of 10% or more with a free booking account
            </p>

            <button className='header-btn'>Sign in / Register</button>
            
            <div className='header-search'>
                <div className='header-search-item'>
                    <FontAwesomeIcon icon={faBed} className='header-icon'/>
                    <input type='text' placeholder='Where are you going?' className='header-search-input' onChange={e=>setDestination(e.target.value)}/> 
                </div>

                <div className='header-search-item'>
                    <FontAwesomeIcon onClick={()=>setOpenDate(prev=>!prev)}  icon={faCalendarDays} className='header-icon'/>
                    <span className='header-search-text'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {
                        openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item)=> setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                        />
                    }
                </div>

                <div className='header-search-item'>
                    <FontAwesomeIcon icon={faPerson} className='header-icon'/>
                    <span onClick={()=>setOpenOptions(prev=>!prev)} className='header-search-text'>{`${options.adult} adult - ${options.children} children - ${options.room} - room`}</span>
                    
                    {
                        openOptions && <div className='options'>    
                        <div className='option-item'>
                            <span className='option-text'>Adult</span>
                            <div className='option-counter'>
                                <button className='option-counter-btn' onClick={()=>handleOption("adult","d")} disabled={options.adult<=1}>-</button>
                                <span className='option-counter-number'>{options.adult}</span>
                                <button className='option-counter-btn' onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                        </div>

                        <div className='option-item'>
                            <span className='option-text'>Children</span>
                            <div className='option-counter'>
                                <button className='option-counter-btn' onClick={()=>handleOption("children","d")} disabled={options.children<=1}>-</button>
                                <span className='option-counter-number'>{options.children}</span>
                                <button className='option-counter-btn' onClick={()=>handleOption("children","i")}>+</button>
                            </div>    
                        </div>

                        <div className='option-item'>
                            <span className='option-text'>Room</span>
                            <div className='option-counter'>
                                <button className='option-counter-btn' onClick={()=>handleOption("room","d")} disabled={options.room<=1}>-</button>
                                <span className='option-counter-number'>{options.room}</span>
                                <button className='option-counter-btn' onClick={()=>handleOption("room","i")}>+</button>
                            </div>
                        </div>

                    </div>
                    }
                    </div>
                

                <div className='header-search-item'>
                    <button  onClick={handleSearch} className='header-btn'>Search</button>
                </div>

            </div>
            </>}
            
            

            
        </div>
    </div>
  )
}

export default Header

// https://youtu.be/RkWpJ4XUHuw?t=2045