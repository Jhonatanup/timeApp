import api from './api'

const key = '73690225b639ba04a1f5ea898e5789b9'
const lang = 'pt'
const units = 'metric'
const url = `forecast?appid=${key}&lang=${lang}&units=${units}&q=`

export default async function fetchData(city){
        const response = await api.get(`${url+city}`)
        return response.data
}