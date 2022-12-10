

import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import CurrentCarriers from './Screens/CurrentCarriers.js';
import CarrierDetails from './Screens/CarrierDetails';
import CurrentLocations from './Screens/CurrentLocations';
import HomeScreen from './Screens/HomeScreen';



function App() {
  return (
    
   <Router>
   <Header></Header>
   <Route path='/' component={HomeScreen} exact></Route>
   <Route path='/currentcarriers' component={CurrentCarriers} exact></Route>
   <Route path='/currentlocations' component={CurrentLocations} exact></Route>
   <Route path='/carrierdetails/:id' component={CarrierDetails} exact></Route>
   
   <Footer/>
    </Router>
  
  );
}

export default App;
