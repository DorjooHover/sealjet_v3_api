import './App.css';
// import Sidebar from './component/Sidebar';
// import {  BrowserRouter as Router,Route,Switch} from "react-router-dom";
// import Order from './component/Order/Order';
// import Product from './component/Product/Product';
// import News from './component/News/News';
// import Settings from './component/settingss/Settings';
import React, { useState, useEffect } from 'react';
import LoginForm from './component/LogIn/Login';
import Dashboard from './component/Dashboard';
import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux'
import Form from './component/Form/Form'


// const Routing = () => {
//   return(
//     <Router>
//       <Switch>
//       <Route exact path="/admin" component={App} />


//       </Switch>
//     </Router>
//   )
// }

function App() {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatchEvent(getPosts())
  // }, [currentId, dispatch])
  const adminUser = {
    email: 'Admin',
    password: '1234'
  }
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('Logged in')
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log('Details do no match');
      setError('Нэр нууц үг буруу байна');
    }

  }
    ;
  const Logout = () => {
    setUser({ name: '', email: '' });
  }
  return (
    <div>
      {(user.email != '') ? (
        <div >
          <Form cusrrentId={currentId} setCurrentId={setCurrentId} />
          <div className='addmin'>
            <h2 className='aicon'>Admin<span>{user.name}</span></h2>
            <div className="icon">
              <i className="bi bi-person-fill "></i>
              <button className='btn' onClick={Logout}>Log out</button>
            </div>
          </div>
          <Dashboard />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

    </div>

    /* // <Router>
    //   <div className="container">
      
      
    //   <Sidebar/>
    //     <Switch>
    //     <Route path={"/order"}>
    //        <Order/>
    //      </Route>
    //       <Route path={"/product"}>
    //         <Product/>
    //       </Route>
    //       <Route path={"/news"}>
    //         <News/>
    //       </Route>
    //       <Route path={"/setting"}>
    //         <Settings/>
    //       </Route>
          
    //     </Switch>
    //   </div>

    // </Router> */
  );
}

export default App;
