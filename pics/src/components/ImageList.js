import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  //return <div className="image-list">{images}</div>;
  return (
    <div style={{margin:'5px',display:'flex' , flexWrap:'wrap' , height:'auto' , minHeight:'500px', padding:'10px' , flexDirection:'row' , width:'auto', minWidth:'300px'}}>{images}</div>
  )
};

export default ImageList;
