import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Index from './components/layout/Index';
import { Provider } from './context';
import Lyrics from './components/tracks/Lyrics';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Provider >
     <BrowserRouter>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/lyrics/track/:id" component={Lyrics}/>
          </Switch>
        </div>
        <Footer/>
      </React.Fragment>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
