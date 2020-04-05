import React, { useState, useEffect } from 'react';
import {
  FaArrowDown, FaArrowUp, FaTimes, FaSpinner,
} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { DisplayContainer } from './styles';
import fetchSingleData from '../../services/fetchSingleData';

export default function Display() {
  const busca = window.location.href.substring(window.location.href.search('detail') + 7);
  const dicio = ['Tempestade', 'Garoa', 'Chuva', 'Neve', 'Névoa', 'Limpo', 'Nublado'];
  const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const dia = new Date();
  const history = useHistory();
  const [cidade, setCidade] = useState('');
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [main, setMain] = useState([]);
  const [weather, setWeather] = useState([]);
  const [wind, setWind] = useState('');

  function goHome() {
    history.push('/');
  }

  useEffect(() => {
    async function fetch() {
      const response = await fetchSingleData(busca);
      setCidade(response.city);
      setFirst(response.list[7].main);
      setSecond(response.list[15].main);
      setThird(response.list[23].main);
      setFourth(response.list[31].main);
      setMain(response.list[0].main);
      setWeather(response.list[0].weather[0]);
      setWind(response.list[0].wind);
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
        {(cidade.name === undefined || main.temp === undefined || weather.main === undefined)
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
                {cidade.country}
              </p>
              <p className="temp">
                {parseFloat(main.temp).toFixed(0)}
                °C
                {' '}
                {dicio[setPosition(weather.id)]}
              </p>
              <ul className="info">
                <li>
                  <strong>
                    <FaArrowDown color="#F89B31" />
                    {parseFloat(main.temp_min).toFixed(0)}
                    °
                  </strong>
                  {' '}
&nbsp;
                  <strong>
                    <FaArrowUp color="#F89B31" />
                    {parseFloat(main.temp_max).toFixed(0)}
                    °
                  </strong>
                </li>
                <li>
                  Sensação
                  <strong>
                    {parseFloat(main.feels_like).toFixed(0)}
                    °
                  </strong>
                </li>
                <li>
                  Vento
                  <strong>
                    {parseFloat(wind.speed * 3.6).toFixed(0)}
                    km/h
                  </strong>
                </li>
                <li>
                  Humidade
                  <strong>
                    {parseFloat(main.humidity).toFixed(0)}
                    %
                  </strong>
                </li>

              </ul>


            </>
          )}

      </div>

      {first.temp_min === undefined ? ''
        : (
          <>
            <hr />
            <ul className="nextDays">
              <li>{semana[(dia.getDay() + 1) % 6]}</li>
              <li>{semana[(dia.getDay() + 2) % 6]}</li>
              <li>{semana[(dia.getDay() + 3) % 6]}</li>
              <li>{semana[(dia.getDay() + 4) % 6]}</li>
              <li>
                {parseFloat(first.temp_min).toFixed(0)}
                °
                {' '}
                {parseFloat(first.temp_max).toFixed(0)}
                °
              </li>
              <li>
                {parseFloat(second.temp_min).toFixed(0)}
                °
                {' '}
                {parseFloat(second.temp_max).toFixed(0)}
                °
              </li>
              <li>
                {parseFloat(third.temp_min).toFixed(0)}
                °
                {' '}
                {parseFloat(third.temp_max).toFixed(0)}
                °
              </li>
              <li>
                {parseFloat(fourth.temp_min).toFixed(0)}
                °
                {' '}
                {parseFloat(fourth.temp_max).toFixed(0)}
                °
              </li>
            </ul>
          </>
        )}

    </DisplayContainer>
  );
}
