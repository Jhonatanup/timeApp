import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import List from '../../components/List'

export default function Search(){
    return (
        <div>
            <Header fontSize={3.75}/>
            <SearchBar/>
            <List/>
        </div>
    )
}