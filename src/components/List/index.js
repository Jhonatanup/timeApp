import React from 'react'
import { Capitais } from './styles'

export default function List(){
    return(
        <Capitais>
                <h1>
                    Capitais
                </h1>
                <ul className="listCities">
                    <li className="minmax">Min Máx</li>
                    <li className="hideMinMax">Min Máx</li>
                    <li>18º 22° Rio de Janeiro</li>
                    <li>14º 22° São Paulo</li>
                    <li>21º 32° Belo Horizonte</li>
                    <li>24º 37° Brasília</li>
                    <li>24º 37° Belém</li>
                    <li>23º 37° Salvador</li>
                    <li>05º 14° Curitiba</li>
                    <li>21º 32° Fortaleza</li>
                    <li>24º 37° Manaus</li>
                    <li>28º 40° João Pessoa</li>
                </ul>
            </Capitais>
    )
}