import api from './api'

const key = '73690225b639ba04a1f5ea898e5789b9'
const lang = 'pt'
const units = 'metric'
const citiesIds = {
    saoPaulo: '3448439',
    rioDeJaneiro: '3451190',
    beloHorizonte: '3470127',
    brasilia: '3469058',
    belem: '3405870',
    goiania: '3462377',
    campoGrande: '3467747',
    fortaleza: '6320062',
    manaus: '3663517',
    joaoPessoa: '3397277',

} 
const url = `group?appid=${key}&lang=${lang}&units=${units}&id=${citiesIds.saoPaulo},${citiesIds.rioDeJaneiro},${citiesIds.beloHorizonte},${citiesIds.brasilia},${citiesIds.belem},${citiesIds.goiania},${citiesIds.campoGrande},${citiesIds.fortaleza},${citiesIds.manaus},${citiesIds.joaoPessoa}`
export default async function fetchGroupData(){
        const response = await api.get(`${url}`)
        return response   
}