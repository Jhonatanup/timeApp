import React from 'react'
import { SearchContainer } from './styles'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar(props){
    return(
        <SearchContainer 
            marginBottom={props.marginBottom}
            right={props.right}
            top={props.top}
        >
            <form>
                <input type="text" placeholder="Insira aqui o nome da cidade"/>
                <FaSearch className="icon"/>
            </form>
            <hr/>
        </SearchContainer>
    )
}