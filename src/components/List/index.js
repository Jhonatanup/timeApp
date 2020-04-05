import React, { useState, useEffect } from 'react'
import { Capitais } from './styles'
import '../../services/fetchGroupData'
import fetchGroupData from '../../services/fetchGroupData'

export default function List(){
    const [capitais, setCapitais] = useState([])

    useEffect(() => {
        async function fetch(){
            const response = await fetchGroupData()
            const data = await response.data.list
            setCapitais(data) 
        }
        fetch()  
    }, [])
    return(
        <Capitais>
                <h1>
                    Capitais
                </h1>
                <ul className="listCities">
                    <li className="minmax">Min Máx</li>
                    <li className="hideMinMax">Min Máx</li>
                    {capitais.map(cap => (
                        <li key={cap.id}>
                            {parseFloat(cap.main.temp_min).toFixed(0)}° {parseFloat(cap.main.temp_max).toFixed(0)}° {cap.name}
                        </li>
                    ))}
                </ul>
            </Capitais>
    )
}