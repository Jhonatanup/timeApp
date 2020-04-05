import React, { useState, useEffect } from 'react'
import { FaArrowDown, FaArrowUp, FaTimes } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { DisplayContainer } from './styles'
import fetchSingleData from '../../services/fetchSingleData'

export default function Display(){
    let busca = window.location.href.substring(window.location.href.search('detail')+7)

    var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    let dia = new Date()
    const history = useHistory()
    const [cidade, setCidade] = useState('') 
    const [first, setFirst] = useState([])
    const [second, setSecond] = useState([])
    const [third, setThird] = useState([])
    const [fourth, setFourth] = useState([])
    const [main, setMain] = useState([])
    const [weather, setWeather] = useState([])
    const [wind, setWind] = useState('')

    function goHome(){
        history.push('/')
    }

    useEffect(() => {
        async function fetch(){
            const response = await fetchSingleData(busca)
            setCidade(response.city)
            setFirst(response.list[7].main)
            setSecond(response.list[15].main)
            setThird(response.list[23].main)
            setFourth(response.list[31].main)
            setMain(response.list[0].main)
            setWeather(response.list[0].weather[0])
            setWind(response.list[0].wind)
        }
        fetch()
    }, [busca])
    return(
        <DisplayContainer>
            <div className="infoNow">
                <button onClick={goHome}>
                    <FaTimes size="35" color="#F89B31"/>
                </button>
                <p className="city">{cidade.name}, {cidade.country}</p>
                <p className="temp">{parseFloat(main.temp).toFixed(0)}°C {weather.main}</p>
                <ul className="info">
                    <li>
                        <strong>
                            <FaArrowDown color="#F89B31"/>{parseFloat(main.temp_min).toFixed(0)}°
                        </strong> &nbsp;
                        <strong>
                            <FaArrowUp color="#F89B31"/>{parseFloat(main.temp_max).toFixed(0)}°
                        </strong>
                        </li>
                        <li>Sensação <strong>{parseFloat(main.feels_like).toFixed(0)}°</strong></li>
                        <li>Vento <strong>{parseFloat(wind.speed * 3.6).toFixed(0)}km/h</strong></li>
                        <li>Humidade <strong>{parseFloat(main.humidity).toFixed(0)}%</strong></li>
                       
                </ul>
                </div>
                <hr/>
                <ul className="nextDays">
                    <li>{semana[(dia.getDay()+1)%6]}</li>
                    <li>{semana[(dia.getDay()+2)%6]}</li>
                    <li>{semana[(dia.getDay()+3)%6]}</li>
                    <li>{semana[(dia.getDay()+4)%6]}</li>
                    <li>{parseFloat(first.temp_min).toFixed(0)}° {parseFloat(first.temp_max).toFixed(0)}°</li>
                    <li>{parseFloat(second.temp_min).toFixed(0)}° {parseFloat(second.temp_max).toFixed(0)}°</li>
                    <li>{parseFloat(third.temp_min).toFixed(0)}° {parseFloat(third.temp_max).toFixed(0)}°</li>
                    <li>{parseFloat(fourth.temp_min).toFixed(0)}° {parseFloat(fourth.temp_max).toFixed(0)}°</li>
                </ul>
        </DisplayContainer>
    )
}