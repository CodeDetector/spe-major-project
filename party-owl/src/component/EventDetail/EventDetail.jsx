import React from "react";
import moment from 'moment'

const DateView =({moment_date})=>{
    
    var month = moment_date.format("MMMM")
    var day = moment_date.format("DD")
    var year = moment_date.format("YYYY")

    return( 
        <div style ={{ height : "100%" , width : "100%" ,padding : "2px" }}>
            <p style= {{fontSize: "20px" , color : "red" , padding : "0px" , margin: "0px"}}>{month.toUpperCase()}</p>
            <p style= {{fontSize: "30px" , color : "black", padding : "0px", margin: "0px" }}>{day.toUpperCase()}</p> 
            <p style= {{fontSize: "20px" , color : "black", padding : "0px", margin: "0px"}}>{year}</p>
        </div>
    )
}

const EventText = ({heading , subheading}) => { 
    return(
        <div style ={{ height : "100%" , width : "100%" ,padding : "2px" , alignContent:"center"}}>
            <p style= {{fontSize: "30px" , color : "red" , padding : "0px" , margin: "0px"}}>{heading}</p>

            <p style= {{fontSize: "15px" , color : "black", padding : "0px", margin: "0px"}}>{subheading}</p>
        </div>
    )
}
const EventDetail = ({data}) =>{
    var details = "05-18-2023"
    var moment_date = moment(details) 

    return(
        <div className="detail-container"  style={{display : 'flex'  , width:'100%' , height:'0%' , backgroundColor:'white'}} >
            <div style = {{height : "80%" , width : "20%" , margin : "5px" }}>
                <DateView moment_date = {moment_date}/> 
            </div>
            <div style = {{height : "70%" , width : "100%" , margin : "0px" ,padding : "0px"}}>
                <EventText heading="Biggest IPL Screening In The City!!!" subheading={data.address}/> 
            </div>
        </div>
    )
}

export default EventDetail ; 