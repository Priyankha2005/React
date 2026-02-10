import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Bikenavbar';
import Home from './Components/Homebike';
import CitySelection from './Components/City';
import SearchPage from './Components/Search';
import Buy from './Components/Buy';
import Sell from './Components/Sells';
import Service from './Components/Service';
import Account from './Components/Account';
import BrandDetails from './Components/Brand';
import Shop from './Components/Shop';
import Ride from './Components/Ride';
import Easy from './Components/Easyride';
import Quality from './Components/Quality';
import Footerbike from './Components/Footerbike';
import BikeDetails from './Components/Details';
import Bill from './Components/Bill';
import Adminpanel from './Components/Adminpanel';

function App() {
  return (
    <>
    <Router>
      <Navbar />
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-city" element={<CitySelection />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/brand/:brandName" element={<BrandDetails />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/service" element={<Service />}/>
        <Route path="/account" element={<Account />} />
        <Route path="/details/:id" element={<BikeDetails />} />
        <Route path="/buy/:id" element={<Bill />} />  
        <Route path="/admin" element={<Adminpanel />} />

    </Routes>
    

        <Shop/>
        <Ride/>
        <Easy/>
        <Quality/>
        <Footerbike/>
    </Router>
    
  </>
  );
}

export default App;

