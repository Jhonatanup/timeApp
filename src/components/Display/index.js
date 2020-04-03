import React from 'react'
import { FaArrowDown, FaArrowUp, FaTimes } from 'react-icons/fa'
import { DisplayContainer } from './styles'

export default function Display(){
    return(
        <DisplayContainer>
            <div className="infoNow">
                <button>
                    <FaTimes size="35" color="#F89B31"/>
                </button>
                <p className="city">Niterói, RJ - Brasil</p>
                <p className="temp">20ºC Nublado</p>
                    <ul className="info">
                        <li>
                            <strong>
                                <FaArrowDown color="#F89B31"/>16º
                            </strong> &nbsp;
                            <strong>
                                <FaArrowUp color="#F89B31"/>25º
                            </strong>
                        </li>
                        <li>Sensação <strong>19°</strong></li>
                        <li>Vento <strong>18km/h</strong></li>
                        <li>Humidade <strong>89%</strong></li>
                    </ul>
                </div>
                <hr/>
                <ul className="nextDays">
                    <li>Terça</li>
                    <li>Quarta</li>
                    <li>Quinta</li>
                    <li>Sexta</li>
                    <li className="orangeLetter">18º 26</li>
                    <li className="orangeLetter">18º 28º</li>
                    <li className="orangeLetter">19º 30º</li>
                    <li className="orangeLetter">23º 35º</li>
                </ul>
        </DisplayContainer>
    )
}