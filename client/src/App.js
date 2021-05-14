import React, { useEffect, useState } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Login from './Login';

function App() {
  const [User, setUser] = useState(null)
  

  // console.log(Messages);
  return (
    <div className="app">
      {!User ?
      <Login />
      : 
     <div className="app_body">
      <Sidebar />
       <Router>
         <Switch>
           <Route path="/thread/:roomId" >
              <Chat />
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          </Switch>
        </Router>
     </div>
}
    </div>
  );
}

export default App;
