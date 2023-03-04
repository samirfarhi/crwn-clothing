import { useContext } from 'react'

import './checkout-item.styles.scss'

import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext)
  const { name, imageUrl, quantity, price } = checkoutItem

  const clearItemHandler = () => clearItemFromCart(checkoutItem)
  const addItemHandler = () => addItemToCart(checkoutItem)
  const removeItemHandler = () => removeItemToCart(checkoutItem)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
