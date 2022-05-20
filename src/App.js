import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data'
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react';

function App() {
  const [value, setValue] = useState(0)

  const checkMaxSlide = (num) => {
    if(num > data.length - 1){
      return 0
    }
    if(num < 0){
      return data.length-1
    }
    return num
  }

  const nextSlide = () => {
    setValue((prevValue)=>{
      var next = prevValue + 1
      return checkMaxSlide(next)
    })
  }

  const prevSlide = () => {
    setValue((prevValue)=>{
      var prev = prevValue - 1
      return checkMaxSlide(prev)
    })
  }

  const {image, name, title, quote} = data[value]

  useEffect(()=>[
    
  ])
  
  useEffect(()=>{
    var slide = setInterval(()=>{
      nextSlide()
    }, 3000)
    
    return () => clearInterval(slide)
  }, [value])
  
  return (
   <>
    <div className = "d-flex justify-content-center align-items-center flex-column">
      <h1>Reviews</h1>
      <img style = {{width : "400px", height : "auto", borderRadius : "50%"}} src = {image} alt = {name}/>
    </div>
    <div className = "d-flex justify-content-between m-5" >
      <Button onClick = {prevSlide} style = {{width : "50px", height: "50px"}}>prev</Button>
      <div className = "text-center">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
      <Button onClick = {nextSlide} style = {{width : "50px", height: "50px"}}>next</Button>
      
    </div>
      <p className = "text-center">{quote}</p>
   </>
  );
}

export default App;
