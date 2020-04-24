/**
 * @author City
 * @description 根组件
 */

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import asyncComponent from "./components/router/asyncComponent";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/home" component={asyncComponent(() => import("./pages/Home/index"))}></Route>
                <Route path="/article" component={asyncComponent(() => import("./pages/Article/index"))}></Route>
                <Route path="/comment" component={asyncComponent(() => import("./pages/Comment/index"))}></Route>
                <Route path="/my" component={asyncComponent(() => import("./pages/My/index"))}></Route>
                <Route path="/collect" component={asyncComponent(() => import("./pages/Collect/index"))}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        </div>
    );
}

export default App;