import React, { useState, useEffect } from 'react';
import {
  FaArrowDown, FaArrowUp, FaTimes, FaSpinner,
} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { DisplayContainer } from './styles';
import fetchSingleData from '../../services/fetchSingleData';
import minMaxForecast from '../../services/minMaxForecast';

export default function Display() {
  // const busca = window.location.href.substring(window.location.href.search('detail') + 7);
  const busca = localStorage.getItem('busca');
  const dicio = ['Tempestade', 'Garoa', 'Chuva', 'Neve', 'Névoa', 'Limpo', 'Nublado'];
  const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const dia = new Date();
  const history = useHistory();
  const [cidade, setCidade] = useState('');
  const [minMax, setMinMax] = useState([]);

  function goHome() {
    history.push('/');
  }

  useEffect(() => {
    async function fetch() {
      const response = await fetchSingleData(busca);
      setCidade(response);
    }
    fetch();
  }, [busca]);

  useEffect(() => {
    async function fetch() {
      const response = await minMaxForecast(busca);
      setMinMax(response);
    }
    fetch();
  }, [busca]);

  let position;

  function setPosition(id) {
    if (id === 800) position = 5;
    else if (id > 800) position = 6;
    else if (id < 800 && id > 400) position = ((id / 100) % 10) - 3;
    else position = ((id / 100) % 10) - 2;

    return position;
  }

  return (
    <DisplayContainer>
      <div className="infoNow">
        {(cidade.name === undefined || cidade.sys === undefined || cidade.weather === undefined)
          ? (
            <div className="loading">
              <FaSpinner size={72} className="fa-spin" />
              <h1>Carregando...</h1>
            </div>
          )
          : (
            <>
              <button type="button" onClick={goHome}>
                <FaTimes size="35" color="#F89B31" />
              </button>
              <p className="city">
                {cidade.name}
                ,
                {' '}
                {cidade.sys.country}
              </p>
              <p className="temp">
                {parseFloat(cidade.main.temp).toFixed(0)}
                °C
                {' '}
                {dicio[setPosition(cidade.weather[0].id)]}
              </p>
              <ul className="info">
                <li>
                  <strong>
                    <FaArrowDown color="#F89B31" />
                    {parseFloat(cidade.main.temp_min).toFixed(0)}
                    °
                  </strong>
                  {' '}
&nbsp;
                  <strong>
                    <FaArrowUp color="#F89B31" />
                    {parseFloat(cidade.main.temp_max).toFixed(0)}
                    °
                  </strong>
                </li>
                <li>
                  Sensação
                  <strong>
                    &nbsp;
                    {parseFloat(cidade.main.feels_like).toFixed(0)}
                    °
                  </strong>
                </li>
                <li>
                  Vento
                  <strong>
                    &nbsp;
                    {parseFloat(cidade.wind.speed * 3.6).toFixed(0)}
                    km/h

                  </strong>
                </li>
                <li>
                  Humidade
                  <strong>
                    &nbsp;
                    {parseFloat(cidade.main.humidity).toFixed(0)}
                    %
                  </strong>
                </li>

              </ul>


            </>
          )}

      </div>

      {minMax[0] === undefined ? ''
        : (
          <>
            <hr />
            <ul className="nextDays">
              <li>{semana[(dia.getDay() + 1) % 6]}</li>
              <li>{semana[(dia.getDay() + 2) % 6]}</li>
              <li>{semana[(dia.getDay() + 3) % 6]}</li>
              <li>{semana[(dia.getDay() + 4) % 6]}</li>
              <li>
                {parseFloat(minMax[0]).toFixed(0)}
                °
                {' '}
                {parseFloat(minMax[4]).toFixed(0)}
                °
              </li>
              <li>
                {parseFloat(minMax[1]).toFixed(0)}
                °
                {' '}
                {parseFloat(minMax[5]).toFixed(0)}
                °
              </li>
              <li>
                {parseFloat(minMax[2]).toFixed(0)}
                °
                {' '}
                {parseFloat(minMax[6]).toFixed(0)}
                °
              </li>
              <li>
                {parseFloat(minMax[3]).toFixed(0)}
                °
                {' '}
                {parseFloat(minMax[7]).toFixed(0)}
                °
              </li>
            </ul>
          </>
        )}

    </DisplayContainer>
  );
}
