import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (element) => element.id === productToAdd.id
  )
  if (existingCartItem) {
    return cartItems.map((element) => {
      return element.id === productToAdd.id
        ? { ...element, quantity: element.quantity + 1 }
        : element
    })
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  updateQuantity: () => {},
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (id) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id)
    setCartItems(newCartItems)
  }

  const updateQuantity = (id, newQuantity) => {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
    )
    setCartItems(newCartItems)
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartCount,
    cartItems,
    removeItemFromCart,
    updateQuantity,
    cartTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
