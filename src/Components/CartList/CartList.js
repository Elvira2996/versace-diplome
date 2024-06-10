import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Header from "../Header/Header";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty
    })
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.image} alt={product.name} />
        </Link>
        <Link to={"/products/" + product.slug}>{product.name}</Link>
        <span>${(cart[product.id] * product.price).toFixed(2)}</span>
<div className="calc flex">
        <div className="inputs">
          <button className="minus" onClick={() => onQuantityChange(product, cart[product.id] - 1)}>-</button>
          <input
            type="number"
            value={cart[product.id]}
            min={1}
            className="cardCount"
            onChange={(event) => onQuantityChange(product, +event.target.value)} />
          <button className="plus" onClick={() => onQuantityChange(product, cart[product.id] + 1)}>+</button>
          
        </div>
        <i className="CardDelete" onClick={() => onItemRemove(product)} />
        </div>
       
     
      </div>
    ));

  return (
    
    <div className="CartList">
      
      {output}
    </div>
  )
}
