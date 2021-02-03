
import './App.css';

import Header from './components/Dashboard/Header/Header';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Feed from './components/Dashboard/Feed/Feed';
import Widgets from './components/Dashboard/Widgets/Widgets'
import Login from './components/Login/Login'
import { useStateValue } from './StateProvider'


function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
            <Header />

<div className="app__body">
  <Sidebar />
  <Feed />
  <Widgets />



</div>
        </>
      )
    }
    </div>
  );
}

export default App;
