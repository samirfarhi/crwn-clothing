import { useSelector } from 'react-redux'

import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-from/payment-form.component'

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
      ))}
      <div className="total">Total: ${cartTotal}</div>
      <PaymentForm />
    </div>
  )
}

export default Checkout
