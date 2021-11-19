
import MainStore from "./components/MainStore"
import Login from './components/Login'
import Register from './components/Register'
import Success from './components/Success'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

import Checkout from './components/Checkout'
import OrderDetails from "./components/OrderDetails"

function App() {

  return (
    <>
      <Router>
          <Switch>
          <Route path="/orderdetails">
            <OrderDetails />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/checkout">
                <Checkout />

              </Route>

              <Route path="/store">
                <MainStore />

              </Route>
              <Route path="/register">
                <Register />

              </Route>
              <Route path="/">
                <Login />

              </Route>
          </Switch>
      </Router>

    </>
  )
}

export default App
