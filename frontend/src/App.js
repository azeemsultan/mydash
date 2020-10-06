import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import Newsfeed from './Newsfeed/newsfeed';
import NearBy from './Nearby/nearby';
import Profile from './Profile/profile';

import Footer from './screens/Footer';
import Header from './screens/Header';
import SignInScreen from './screens/SigninScreen';
import RegisterScreen from './screens/registerScreen';
import ServiceAdd from './screens/ServiceAdd';



function App() {

 
    return (
<BrowserRouter>

<Header/>

    
 
<div>
   <main className="main">
        <div className="content">
            <Route path="/signin" component ={SignInScreen}/>
            <Route path="/serviceadd" component ={ServiceAdd}/>
            <Route path="/register" component ={RegisterScreen}/>
            <Route path="/serviceprovider/:id"  exact={true} component={ServiceScreen}/>
            <Route path="/cart/:id?"  exact={true} component={CartScreen}/>
            <Route path="/newsfeed/"   component={Newsfeed}/>
            <Route path="/nearby/"   component={NearBy}/>
            <Route path="/profile/"   component={Profile}/>
            <Route path="/" exact={true} component={HomeScreen}/>
            
        </div>
       
    </main>

    </div>


    <Footer/>
</BrowserRouter>
  );
}

export default App;
