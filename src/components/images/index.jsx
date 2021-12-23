import React, { useState } from 'react'
import { Container } from './style'
import { ReactComponent as Heart } from "../../assets/icon/heart-solid.svg"
import { ReactComponent as Comment } from "../../assets/icon/comment-solid.svg"
import { ReactComponent as Bookmark } from "../../assets/icon/bookmark-solid.svg"
const Images = () => {
    const [likes, setLIkes] = useState(Math.floor(Math.random() * 1000))
    const [images, setImages] = useState([])
    const [active, setActive] = useState(true)
    const Fetch = async () => {
        await fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setImages(data))
        setActive(false)
    }

    return (
        <>

            {active ?
                <button onClick={Fetch}>Fetch</button>
                :

                <Container>
                    {images.map((value) => (

                        <div style={{ width: "400px", height: "300px", backgroundImage: `url(${value.url}) `, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "end", padding: "20px", color: "white" }}>
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", width: "100%", color: "white !important" }}>
                                <p style={{ color: "white" }}>{value.title.split('').slice(0, 10).join('')}</p>

                                <div style={{ display: "flex", color: "#fff" }}>
                                    <p style={{ color: "white" }}><span><Heart className="heart" style={{ width: "15px", height: "15px", fill: "#fff" }} /></span> {likes}</p>
                                    <p style={{ color: "white" }}><span><Comment style={{ width: "15px", height: "15px", fill: "white" }} /></span> 0</p>
                                    <Bookmark style={{ width: "15px", height: "15px", fill: "white" }} />


                                </div>
                            </div>
                        </div>

                    ))}
                </Container>
            }

        </>
    )
}

export default Images
