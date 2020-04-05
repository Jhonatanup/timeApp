import React from 'react'
import { SearchContainer } from './styles'
import { useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar(props){
    const history = useHistory()

    function search(event){
        event.preventDefault()
        let query = document.querySelector('input[name=search]')
        console.log(query.value)
        history.push('/detail:'+query.value)
    }

    return(
        <SearchContainer 
            marginBottom={props.marginBottom}
            right={props.right}
            top={props.top}
        >
            <form onSubmit={search}>
                <input type="text" placeholder="Insira aqui o nome da cidade" name="search"/>
                <FaSearch className="icon" onClick={search}/>
            </form>
            <hr/>
        </SearchContainer>
    )
}