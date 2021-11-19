import storeItems from "../items.json"
import Store from "./Store"
import Cart from "./Cart"
import useAlan from "../hooks/useAlan"

function MainStore() {
  useAlan()

  return (
    <>
      <Store items={storeItems} />
      <Cart />
    </>
  )
}

export default MainStore