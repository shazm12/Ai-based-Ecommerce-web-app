import { useEffect, useState, useCallback } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import { useCart } from '../context/CartContext'
import storeItems from '../items.json'
import { useHistory } from 'react-router-dom'


const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  PURCHASE_ITEMS: "purchase-items",
  CHECKOUT : "check-out"
}

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState()
  const{ setShowCartItems, isCartEmpty,addToCart,removeFromCart,cart,checkout } = useCart()
  
  const history = useHistory();

  const openCart = useCallback(() => {
    if(isCartEmpty) {
      alanInstance.playText("You have no items in your cart")
    } else {
      alanInstance.playText("Opening your cart")
      setShowCartItems(true)
    }
 
  }, [alanInstance, isCartEmpty, setShowCartItems])

  const closeCart = useCallback(() => {
    if(isCartEmpty) {
      alanInstance.playText("You have no items in your cart")
    } else {
      alanInstance.playText("Closing your cart")
      setShowCartItems(false)
    }

    
  }, [alanInstance, isCartEmpty, setShowCartItems])


  const additem = useCallback(({detail: { name, quantity }}) => {

    const item = storeItems.find(i => i.name.toLowerCase() === name.toLowerCase())
    if(item == null) {
      alanInstance.playText(`I cannot find ${name}`)
    }
    else {

      addToCart(item.id,quantity)
      alanInstance.playText(`Ading ${quantity} of the ${name} to your cart`)
    }
    
  }, [alanInstance, addToCart])

  const removeitem = useCallback(({detail: { name }}) => {

    const entry = cart.find(e => e.item.name.toLowerCase() === name.toLowerCase())
    if(entry == null) {
      alanInstance.playText(`I cannot find ${name} in your cart`)
    }
    else {

      removeFromCart(entry.itemId)
      console.log(storeItems[entry.itemId-1].name);
      alanInstance.playText(`Removed ${storeItems[entry.itemId-1].name} from your cart`)
    }
    
  }, [alanInstance, removeFromCart,cart])

  const purchase = useCallback(() => {
    if(isCartEmpty) {
      alanInstance.playText("Your cart is empty")
    } else {
      alanInstance.playText("Thank you for shopping with us")
      checkout()
      history.push('/checkout')
    }
  }, [alanInstance,isCartEmpty, checkout])



  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart)
    window.addEventListener(COMMANDS.CLOSE_CART, closeCart)
    window.addEventListener(COMMANDS.ADD_ITEM, additem)
    window.addEventListener(COMMANDS.REMOVE_ITEM, removeitem)
    window.addEventListener(COMMANDS.PURCHASE_ITEMS, purchase)
    window.addEventListener(COMMANDS.PURCHASE_ITEMS, purchase)


    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart)
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart)
      window.removeEventListener(COMMANDS.ADD_ITEM, additem)
      window.removeEventListener(COMMANDS.PURCHASE_ITEMS, purchase)
    }
  }, [openCart])

  useEffect(() => {
    if (alanInstance != null) return

    setAlanInstance(
      alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }))
        }
      })
    )
  }, [])

  return null
}
