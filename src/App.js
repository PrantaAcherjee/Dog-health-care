import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/LogIn/Login';
import Faq from './Components/FAQ/Faq';
import Register from './Components/Register/Register';
import Error from './Components/Error/Error';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/faq">
              <Faq></Faq>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/detail/:id">
              <Detail></Detail>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
