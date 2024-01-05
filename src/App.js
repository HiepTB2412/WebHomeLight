import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import CateProdetail from "./components/CategoryItems/CateProdetail"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import ProductAdmin from "./Admin/ProductAdmin/ProductAdmin";
import EditProduct from "./Admin/ProductAdmin/EditProduct";
import AddCategory from "./Admin/CategoryAdmin/AddCategory";
import CategoryAdmin from "./Admin/CategoryAdmin/CategoryAdmin";
import Customer from "./Admin/Customer/Customer";
import CustomerDetail from "./Admin/Customer/CustomerDetail";
import Login from "./Login/Login";
import EditCategory from "./Admin/CategoryAdmin/EditCategory";
import AddProduct from "./Admin/ProductAdmin/AddProduct";


function App() {
  /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 
  Step 3 :  chai flashCard ma xa button ma

  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, quantity: productExit.quantity + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, quantity: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.quantity === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
} else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, quantity: productExit.quantity - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/catedetail/:id' exact>
            <CateProdetail productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          {/* <Route path='/productdetail/:id' component={ProductDetail} /> */}
          <Route path='/productdetail/:id' exact>
            <ProductDetail CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/admin' component={ProductAdmin} />
          <Route path='/editproduct/:id' component={EditProduct} />
          <Route path='/addcategory' component={AddCategory} />
          <Route path='/addproduct' component={AddProduct} />
          <Route path='/editcategory/:id' component={EditCategory} />
          <Route path='/categoryadmin' component={CategoryAdmin} />
          <Route path='/customer' component={Customer} />
          <Route path='/customerdetail/:id' component={CustomerDetail} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App