import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";
import "./Product.css"

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product">
      <div className="product_img">
        <img  src={product.image} alt={product.name} />
      </div>
      <div className="product_img2"> 
        <h1>{product.name}</h1>
        <p><strong>Price:</strong> {product.price}$</p>
        <p><strong>Description: </strong>{product.description}</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}