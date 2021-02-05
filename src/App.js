import './App.css';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
          <div className='app__body'>
            <Dashboard />
          </div>
      )}
    </div>
  );
}

export default App;
