import { useState } from "react";


export default function ProductCard({ product }) {

  const [itemsInCart, setItemsInCart] = useState(1)

  const [imageIndex, setImageIndex] = useState(0)
  const [showDescription, setShowDescription] = useState(false)

  
  

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[imageIndex] + " " + product.name}
          alt={product.name}
        />
        <button onClick={() => (setImageIndex(imageIndex + 1))} disabled={imageIndex >= product.imageUrls.length-1} >Next</button>
        <button onClick={() => (setImageIndex(imageIndex - 1))} disabled={imageIndex <= 0}>Previous</button>
      </div>

      <h3>{product.name}</h3>
      <p>{showDescription ? product.description : ""}</p>
      <button onClick={() => (setShowDescription(!showDescription)) } >{showDescription ? 'Hide Description': 'Show Description'}</button>
      <div className="price">${product.price}</div>
      <button onClick={() => {setItemsInCart(itemsInCart +1); alert(itemsInCart)}}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
