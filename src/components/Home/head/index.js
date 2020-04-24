/**
 * @author City
 * @description 头部
 */

import React, { Component } from "react";
import "./main.css";

export default class Head extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getDay() {
        return new Date().getDate();
    }

    getMonth() {
        const arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
        return arr[new Date().getMonth()] + "月";
    }

    getHello() {
        const hour = new Date().getHours();
        if (hour < 2) {
            return "早点休息~";
        } else if (hour < 6) {
            return "凌晨好！";
        } else if (hour < 9) {
            return "早上好！";
        } else if (hour < 12) {
            return "知乎日报";
        } else if (hour < 14) {
            return "中午好！";
        } else if (hour < 19) {
            return "知乎日报";
        } else if (hour < 24) {
            return "晚上好！";
        }
    }

    render() {
        return (
            <header>
                <div className="head-date">
                    <div className="head-day">{this.getDay()}</div>
                    <div className="head-month">{this.getMonth()}</div>
                </div>
                <div className="head-hello">{this.getHello()}</div>
                <div className="head-portrait">
                    <img src="http://q1.qlogo.cn/g?b=qq&nk=11241066&s=100" alt="头像" />
                </div>
            </header>
        );
    }
}
