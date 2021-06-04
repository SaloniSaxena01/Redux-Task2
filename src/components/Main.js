import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchTemperatureSuccess } from './temperatureActions'
import "../css/main.css"

const Main = ({ tempData, fetchTemperatureSuccess }) => {
    useEffect(() => {
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=bf18c965315fddbe8b09511c40fc1a15`)
       .then((response)=>fetchTemperatureSuccess(response.data.main.temp))
       .catch((err)=>console.log(err)) 
    }, [])
    
    return (<div className="main container-fluid">
            
    <i className="fas fa-sun first"></i>
    <h3>{tempData.temp} Degree Celcius</h3>
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

