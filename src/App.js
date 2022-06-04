import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import HowItWorks from './components/pages/HowItWorks'
import Admin from './components/pages/AdminPage';
import Staff from './components/pages/StaffPage';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Contact from './components/pages/Contact';
import StaffSignUp from './components/pages/StaffSignUp';
import StudentForm from "./components/pages/StudentForm";
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>        
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/features' component={Features} />
          <Route path='/howitworks' component={HowItWorks} />
          <Route path='/admin' component={Admin}/>
          <Route path='/staff' component={Staff}/>
          <Route path="/studentform" component={StudentForm} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/contact' component={Contact}/>
          <Route path='/staffSignUp' component={StaffSignUp}/>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
