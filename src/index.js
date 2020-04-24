/**
 * @author City
 * @description 入口文件
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

/* 引入全局样式 */
import "./assets/style/index.css";

/* 引入 Rem 布局 */
import "./assets/js/rem";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
