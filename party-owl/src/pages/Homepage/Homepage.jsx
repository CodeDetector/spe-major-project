import React from 'react'
import Header from '../../component/Header/Header'
import CarouselComp from '../../component/Carousel/Carousel'
import Loading from '../../component/Loading/Loading.component'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import Home from '../../component/Home/Home.component'
import './Homepage.styles.css'
const Homepage=() => {

    const [isLoading, setLoading] = useState(true)
    const [homedata , setHomedata] = useState({}) ;
    
    const uri = "http://localhost:5000/" 
    useEffect(() => {
    
    axios.post(`${uri}location/addAll`, {}).then((result)=>{
        result.data.map((loc)=>{console.log(loc)})
        setHomedata(result.data)
        setLoading(false) 

    }).catch((err)=>{
        console.log(err) 
    })

    }, [])
    
  return (
    <div className="container">
      {
        isLoading ? <Loading/> : <Home allLocations={homedata}/>
      }
    </div>
  )
}

export default Homepage ; 
