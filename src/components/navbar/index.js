import React from 'react'
import { Container } from './style'
// import Pixabay from "../../assets/image/Batat.png"
import { ReactComponent as Pixabay } from "../../assets/icon/pixabay.svg"
import { ReactComponent as Down } from "../../assets/icon/arrowDown.svg"
import { ReactComponent as Upload } from "../../assets/icon/upload.svg"
const Navbar = () => {
    return (
        <Container>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", height: "70px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p className='pixabay'>pixabay</p>
                    <a href='' className='list'>Photos</a>
                    <a href='' className='list'>Illustartions</a>
                    <a href='' className='list'>Vectors</a>
                    <a href='' className='list'>Videos</a>
                    <a href='' className='list'>Music</a>
                    <a href='' className='list'>Sound Effects</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "380px" }}>

                    <p style={{ display: "flex", alignItems: "center", }}>Explore<Down style={{ width: "15px", height: "15px", marginLeft: "5px", opacity: "0.5" }} />
                    </p>
                    <p>Log in</p>
                    <p>Join</p>
                    <button className='uploadbtn'><Upload style={{ width: "15px", height: "15px", marginRight: "5px " }} />Upload</button>
                </div>
            </div>
        </Container>

    )
}

export default Navbar
