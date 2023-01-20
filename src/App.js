import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Home } from './Home';
import { ListItem } from './ListItem';
import { Contact } from './Contact';
import { Rent } from './Rent';
import { useState } from 'react';
import { About } from './About';
import { CartItems } from './CartItems';
import { Rental } from './Rental';
import { Cameras } from './Cameras';
import { Gagets } from './Gagets';



function App() {
  let [cart, setcart] = useState(false)
  return (
    <div className="App" >
      <BrowserRouter>
        <div className="nav-bar">
          <div className="nav-bar_stage1">
            <div className="nav-bar_stage1_logo">
              <img src="https://cdn-icons-png.flaticon.com/512/401/401981.png?w=740&t=st=1674129627~exp=1674130227~hmac=6f99bda78a7701a3e8dd188c354962af970bd9dbdef303f2330bb42bec5d9963" alt="" />
            </div>
            <div className="nav-bar_stage1_searchbar">
              <input type="text" />
              <Button variant="text"><SearchSharpIcon /></Button>
            </div>
          </div>
          <div className="nav-bar_stage2">
            <div className="nav-bar_stage2_route1">
              <Link to="/items">products</Link>
              <Link to="/">offers</Link>
              <Link to="/about">about</Link>
              <Link to="/contact">contact us</Link>
              <Link to="/">sign up</Link>
              <Link className="login" to="/">log in</Link>


            </div>
            <div className="nav-bar_stage2_route2">



              <Link to="/rental">rented</Link>
              <p className="no-cart">1</p>
              <button onClick={() => setcart(!cart)}><ShoppingCartOutlinedIcon /></button>

            </div>



          </div>
        </div>
        {cart ? <div className="cart">
          <CartItems />
        </div> : null}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<ListItem />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/rent/:product/:id' element={<Rent />} />
          <Route path='/about' element={<About />} />
          <Route path='/rental' element={<Rental />} />
          {/* <Route path='/cameras' element={<Cameras />} /> */}
          <Route path='/:item' element={<Gagets />} />








        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
















































