import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Index from './components/layout/Index';
import { Provider } from './context';

function App() {
  return (
    <Provider>
     <BrowserRouter>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}/>
          </Switch>
        </div>
      </React.Fragment>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
