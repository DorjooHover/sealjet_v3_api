import React from 'react'

import Sidebar from '../component//Sidebar';
import {  BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Order from '../component/Order/Order';
import Product from '../component/Product/Product';
import News from '../component/News/News';
import Settings from '../component/settingss/Settings';
import UserList from './News/User/userList';


// const Routing = () => {
//     return(
//       <Router>
//         <Switch>
//         <Route exact path="/admin" component={App} />
  
  
//         </Switch>
//       </Router>
//     )
//   }
function Dashboard() {
    return (
        <Router>
      <div className="container">
      <Sidebar/>
        <Switch>
        <Route path={"/order"}>
           <Order/>
         </Route>
          <Route path={"/product"}>
            <Product/>
          </Route>
          <Route path={"/news"}>
            <News/>
            
          </Route>
          <Route path={"/setting"}>
            <Settings/>
          </Route>
          
        </Switch>
      </div>

    </Router>
    )
}

export default Dashboard

