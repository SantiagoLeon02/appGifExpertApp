import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { getGifts } from "../helpers/getGifs";

export const GifGrid = ({category}) =>{
    
    const [images, setImages]= useState([]);

    const getImages = async() => {
        const newImages = await getGifts(category);
        setImages(newImages);
    }

    useEffect(()=>{
        getImages();
    }, []);

  


    return(
        <>
        <h3>{category}</h3>

        <div className="card-grid">
            {
                images.map( (image) =>(
                    <GifItem 
                        key={image.id}
                        {... image} 
                    />
                    
                ))
            }
        </div>
        
        
        
        </>
    )

}