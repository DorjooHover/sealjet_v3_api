import React from 'react'

import Sidebar from '../component//Sidebar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from '../component/Order/Order';
import Product from '../component/Product/Product';
import News from '../component/News/News';
import Settings from '../component/settingss/Settings';



// const Routing = () => {
//     return(
//       <Router>
//         <Switch>
//         <Route exact path="/admin" component={App} />


//         </Switch>
//       </Router>
//     )
//   }
function Dashboard(currentId, setCurrentId) {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path={"/order"}>
            <Order />
          </Route>
          <Route path={"/product"}>
            <Product />
          </Route>
          <Route path={"/news"}>
            <News currentId={currentId} setCurrentId={setCurrentId} />

          </Route>
          <Route path={"/setting"}>
            <Settings />
          </Route>

        </Switch>
      </div>

    </Router>
  )
}

export default Dashboard

