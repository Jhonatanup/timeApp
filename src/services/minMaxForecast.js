import api from './api';

const key = '73690225b639ba04a1f5ea898e5789b9';
const lang = 'pt';
const units = 'metric';

function setMinMax(response, temp) {
  for (let i = 0; i < 31; i++) {
    if (i < 8 && temp[0] > response.data.list[i].main.temp_min) { temp[0] = response.data.list[i].main.temp_min; } else if (i >= 8 && i < 16 && temp[1] > response.data.list[i].main.temp_min) temp[1] = response.data.list[i].main.temp_min;
    else if (i >= 16 && i < 24 && temp[2] > response.data.list[i].main.temp_min) temp[2] = response.data.list[i].main.temp_min;
    else if (i >= 24 && i < 32 && temp[3] > response.data.list[i].main.temp_min) temp[3] = response.data.list[i].main.temp_min;

    if (i < 8 && temp[4] < response.data.list[i].main.temp_max) { temp[4] = response.data.list[i].main.temp_max; } else if (i >= 8 && i < 16 && temp[5] < response.data.list[i].main.temp_max) temp[5] = response.data.list[i].main.temp_max;
    else if (i >= 16 && i < 24 && temp[6] < response.data.list[i].main.temp_max) temp[6] = response.data.list[i].main.temp_max;
    else if (i >= 24 && i < 32 && temp[7] < response.data.list[i].main.temp_max) temp[7] = response.data.list[i].main.temp_max;
  }
}
export default async function minMaxForecast(city) {
  const urlForecast = `forecast?lang=${lang}&units=${units}&q=${city}&appid=${key}`;
  const temp = [999, 999, 999, 999, 0, 0, 0, 0];
  const response = await api.get(`${urlForecast}`);
  response.data === undefined ? console.log('') : setMinMax(response, temp);

  return temp;
}
