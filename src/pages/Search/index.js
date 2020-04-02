import React from 'react'
import './styles.css'
import { FaSearch } from 'react-icons/fa'

export default function Search(){
    return (
        <div>
            <section class="header">
                <h1>
                    Previsão do tempo
                </h1>
            </section>
            <section class="search">
                <form>
                    <input type="text" placeholder="Insira aqui o nome da cidade"/>
                    <FaSearch className="icon"/>
                </form>
            </section>
            <hr/>
            <section class="capitais">
                <h1>
                    Capitais
                </h1>
                <ul>
                    <li class="minmax">Min Máx</li>
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
            </section>
        </div>
    )
}