import { useContext } from 'react'

import './checkout-item.styles.scss'

import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ checkoutItem }) => {
  const { removeItemFromCart, updateQuantity } = useContext(CartContext)
  const { id, name, imageUrl, quantity, price } = checkoutItem

  const removeItem = () => removeItemFromCart(id)

  const incrementQuantity = () => updateQuantity(id, quantity + 1)

  const decrmentQuantity = () => {
    if (quantity === 1) return
    updateQuantity(id, quantity - 1)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={decrmentQuantity}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={incrementQuantity}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
