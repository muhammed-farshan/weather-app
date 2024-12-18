import { useState } from 'react'
import './App.css'

function App() {
const [search,setSearch]=useState("")
const [weather,setWeather]=useState({})
const[date,setDate]=useState("")


const searchClick=()=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=839be0a0c813c2e1b0d1d055a4687895&units=metric`)
  .then((res)=>res.json())
  .then((result=>{setWeather(result)
    setDate(new Date().toLocaleDateString())
  }))
}


  return (
    <>
      <div className='container-fluid' >
        <div id='main' className=' d-flex  '>
          <div id='brimg' className='  rounded-5 '>
            <div id='sub'  className='mt-5 p-5  fs-3 fw-bold'>The Only Weather Forecast You Need</div>
            <div  className='mt-5 ms-5  d-flex justify-content-center '>
               <input style={{width:'400px'}} onChange={(e)=>setSearch(e.target.value)} className=' rounded fs-5' type=" " placeholder='Enter Location' />
              <button onClick={searchClick} className=' btn border rounded text-primary ms-3 '>Search</button></div>
          </div>
          <div id='second' className='p-5  rounded-5'>
            <h3 className='p-3 fs-1 fw-bold'>Weather Condition</h3>
            <div className=' p-5 mt-5'>
                <div className='ps-3'>
                  <h1 className='fw-bolder'>{weather.main ? weather.main.temp:""}°C</h1>
                  <h2 className='fst-italic mt-3'> Name:{weather.main ? weather.name:""}</h2>
                </div>
                <div  className='p-5 ms-5 mt-5'>
                  <h4 className='fst-italic'>Humidity:{weather.main ? weather.main.humidity:"00"}</h4>
                  <h4 className='fst-italic'>pressure:{weather.main ? weather.main.pressure:"00"}</h4>
                  <h4 className='fst-italic'>Wind:{weather.main ? weather.wind.speed:"00"}</h4>
                  <h4 className='fst-italic'>visibility:{weather.main ? weather.visibility:"00"}</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
