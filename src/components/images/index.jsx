import React, { useState } from 'react'

const Images = () => {

    const [images, setImages] = useState([])
    const Fetch = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/photos")
        const images = await data.json()
        setImages(images)
    }

    return (
        <div>
            {images.map((value) => (
                <p>{value.id}</p>
            ))}
        </div>
    )
}

export default Images
