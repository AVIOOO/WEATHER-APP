import React,{useState} from 'react'
import styles from './styles.css'

function App() {
  const [city,setcity] =useState("")
  const [result,setresult]=useState("")
  const changehandler = e=>{
    setcity(e.target.value)
  }
  const submithandler =e=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()
    ).then(data =>{
      const kelvin = data.main.temp
      const celsius = kelvin - 273.15
    setresult("Temparature at "+" "+city+"\n"+Math.round(celsius)+"°C")
    setcity("")

    })
    console.log(city)
  }
  return (
    <div>
      <center id="card">
        <h1>WEATHER APP </h1>
        <form onSubmit={submithandler}>
          <input type="text" value={city} onChange={changehandler}/><br></br><br></br>
          <input type="submit" value="GET TEMPERATURE" />

        </form>
        <h1>{result}</h1>
     
      
      </center>


    </div>
  )
}

export default App