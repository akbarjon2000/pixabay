import React from 'react'
import Navabar from "../components/navbar"
import Searchbar from '../components/searchbar'
import Images from "../components/images"
const Index = () => {
    return (
        <React.StrictMode>
            <Navabar />
            <Searchbar />
            <Images />
        </React.StrictMode>
    )
}

export default Index
