import React from 'react'
import { SearchContainer } from './styles'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar(){
    return(
        <SearchContainer>
            <form>
                <input type="text" placeholder="Insira aqui o nome da cidade"/>
                <FaSearch className="icon"/>
            </form>
            <hr/>
        </SearchContainer>
    )
}