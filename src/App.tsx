import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import ScrollToTop from './utils/ScrollToTop';

const App: React.FC = () =>{
  return (
     <Router>
       <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
       </ScrollToTop>

     </Router>
  );
}

export default App;
