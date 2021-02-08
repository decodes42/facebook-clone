import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login'
import { useStateValue } from './StateProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login />
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
