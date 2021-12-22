import React, { useState } from 'react'
import { Container } from './style'
import { ReactComponent as Search } from "../../assets/icon/search.svg"
import { ReactComponent as Down } from "../../assets/icon/arrowDown.svg"
const Searchbar = () => {
    const [value, setValue] = useState("Photos")
    return (
        <Container>
            <h1 style={{ fontWeight: "800px", fontSize: "32px", color: "white" }}>Stunning free stock photos for download</h1>
            <p style={{ fontWeight: "400px", fontSize: "16px", color: "white", marginTop: "15px" }}>Over 2.1 million+ royalty free stock photos shared by our talented community.</p>
            <div className='search'>
                <button type='submit' className='submit'><Search /></button>
                <input class="text" type="text" placeholder="Search images, vectors, videos and music" data-autofocus="" autocomplete="off"></input>
                <div style={{ marginLeft: "50px" }}>
                    <p style={{ opacity: "0.5", display: "flex", alignItems: "center" }}>{value}<Down style={{ width: "15px", height: "15px", marginLeft: "10px" }} /></p>
                    <div className='pop'>

                    </div>
                </div>
            </div>

        </Container>

    )
}

export default Searchbar;
