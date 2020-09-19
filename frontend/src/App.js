import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import Newsfeed from './Newsfeed/newsfeed';
import NearBy from './Nearby/nearby';



function App() {

    const openMenu=() =>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu=() =>{
        document.querySelector(".sidebar").classList.remove("open");
       
        
    }
    return (
<BrowserRouter>

    <div className="grid-container">
     
    <header className="header">
      <div className="brand">
          <button className="hamburger" onClick={openMenu}>
              |||
          </button>
          <Link to="/">XsSupport</Link>
          
      </div>
      <div className="header-links">
         <a href="signin.html"> Sign in</a> 
         <a href="cart.html"> Cart now </a>
      </div>
    </header>

   <aside className="sidebar">
       <h3>Profile</h3>
       <button className="button-close" onClick={closeMenu}>x</button>
       <ul>
           <li>
             <a href="/">Service Providers</a>  
           </li>
           <li>
            <a href="./Newsfeed/newsfeed">Newsfeed</a>  
        </li>
        <li>
            <a href="./Nearby/nearby">Nearby Me</a>  
        </li>
       </ul>
   </aside>

   <main className="main">
        <div className="content">
            <Route path="/serviceprovider/:id"  exact={true} component={ServiceScreen}/>
            <Route path="/cart/:id?"  exact={true} component={CartScreen}/>
            <Route path="/newsfeed/"   component={Newsfeed}/>
            <Route path="/nearby/"   component={NearBy}/>
            <Route path="/" exact={true} component={HomeScreen}/>
            
        </div>
       
    </main>

    <footer className="footer">
     All rights reserved.
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
