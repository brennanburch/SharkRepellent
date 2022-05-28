import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import OrderDetails from './Screens/OrderDetails.js';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CurrentOrders from './Screens/CurrentOrders.js';
import CurrentCarriers from './Screens/CurrentCarriers.js';
import {LinkContainer} from 'react-router-bootstrap'
import CarrierDetails from './Screens/CarrierDetails';
import CurrentLocations from './Screens/CurrentLocations';
import HomeScreen from './Screens/HomeScreen';


function App() {
  return (

   <Router>
   <Header/>
    <main >
     
       <Switch>
       <Route path='/home' component={HomeScreen} exact/>
       <Route path='/orders' component={CurrentOrders} exact/>
       <Route path='/shipment/:id' component={OrderDetails} />
       <Route path='/carriers' component={CurrentCarriers} exact/>
       <Route path='/carrier/:name' component={CarrierDetails} />
       <Route path='/locations' component={CurrentLocations} exact/>
       
       

       </Switch>
      

    </main>
    <Footer/>
</Router>
  
  );
}

export default App;
