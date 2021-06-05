import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchTemperatureSuccess } from './temperatureActions'
import "../css/main.css"

const Main = ({ tempData, fetchTemperatureSuccess }) => {
    const [city,setCity] = useState("");
    function clickHandler(event){
        setCity(event.target.value);
    }
    const handleSubmit = () => {
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf18c965315fddbe8b09511c40fc1a15`)
       .then((response)=>{
        fetchTemperatureSuccess(response.data.main.temp+" Degree Celcius")
    })
    .catch((err)=>fetchTemperatureSuccess("City not found"))
}
    
    return (<div className="main container-fluid">
            
    <i className="fas fa-sun first"></i>
            <div className="input-area">
                <input id="userInput" type="text" placeholder="Enter city name" value={city} onChange = { (event) => clickHandler(event)}></input>
                <button className="button-container" onClick = { handleSubmit } >Search</button>
            </div>
    <h3>{tempData.temp}{tempData.name}</h3>
    <i className="fas fa-sun second"></i>


    </div>
)
}

const mapStateToProps = state => {
    return {
        tempData: state.temperature
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTemperatureSuccess: (temp) => dispatch(fetchTemperatureSuccess(temp))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

