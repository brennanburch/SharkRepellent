import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import OrderDetails from './Screens/OrderDetails.js';
import { BrowserRouter as Router} from 'react-router-dom'



function App() {
  return (

   <Router>
   <Header/>
    <main >
 
       <Switch>
       <Route path='/' component={HomeScreen} exact/>
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
