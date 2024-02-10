import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from "./Components/LandingPage"
import PageNotFound from "./Components/PageNotFound"
import AdminLogin from './Pages/AdminLogin';
import CustomerLogin from './Pages/CustomerLogin';
import Footer from './Components/Footer';
import AdminDashboard from './Pages/AdminDashboard';
import CustomerDashboard from './Pages/CustomerDashboard';
import MyProfile from './Components/MyProfile';
import Settings from './Pages/Settings';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/customerlogin' element={<CustomerLogin/>}/>
        <Route path='/customerregister' element={<CustomerLogin customerregister/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/customerdashboard' element={<CustomerDashboard/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
