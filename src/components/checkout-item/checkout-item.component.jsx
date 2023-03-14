import { useSelector, useDispatch } from 'react-redux'

import './checkout-item.styles.scss'

import { selectCartItems } from '../../store/cart/cart.selector'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action'

const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, quantity, price } = checkoutItem

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem))
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem))

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
