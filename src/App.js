import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Dashboard from './Views/Dashboard/Dashboard';
import Main from './Views/Main/Main'
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className='app'>

  {!user ? (
    <Main />
  ) : (
    <>

    <div className='app__body'>
    <BrowserRouter>
     <Switch>
    <Route path='/Dashboard' exact component={Dashboard}/>
   </Switch>
     </BrowserRouter>
    </div>
    </>
  )}
</div>
);

}

export default App;
