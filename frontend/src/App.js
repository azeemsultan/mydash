import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import Newsfeed from './Newsfeed/newsfeed';
import NearBy from './Nearby/nearby';
import Profile from './Profile/profile';
import { Grid } from '@material-ui/core';
import Footer from './screens/Footer';
import Header from './screens/Header';


function App() {

 
    return (
<BrowserRouter>

<Header/>

    
 

   <main className="main">
        <div className="content">
            <Route path="/serviceprovider/:id"  exact={true} component={ServiceScreen}/>
            <Route path="/cart/:id?"  exact={true} component={CartScreen}/>
            <Route path="/newsfeed/"   component={Newsfeed}/>
            <Route path="/nearby/"   component={NearBy}/>
            <Route path="/profile/"   component={Profile}/>
            <Route path="/" exact={true} component={HomeScreen}/>
            
        </div>
       
    </main>


  

    <Footer/>
</BrowserRouter>
  );
}

export default App;
