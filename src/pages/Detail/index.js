import React from 'react'
import Header from '../../components/Header'
import Display from '../../components/Display'
import SearchBar from '../../components/SearchBar'
import List from '../../components/List'

export default function Search(){
    return (
        <div>
            <Header fontSize={2.5} fontSizeSmall={1.75}/>
            <Display/>
            <SearchBar marginBottom={30} right={10} top={20}/>
            <List/>
        </div>
    )
}