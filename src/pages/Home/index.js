/**
 * @author City
 * @description 首页
 */

import React, { Component } from "react";
import "./main.css";
import { getNews } from "../../api/index";

/* 组件 */
import Head from "../../components/Home/head/index";
import Carousel from "../../components/Home/carousel/index";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            news: {}
        };
    }

    componentDidMount() {
        getNews().then(res => {
            this.setState({
                ...this.state,
                news: res.data
            });
        });
    }

    render() {
        const { news } = this.state;
        return (
            <div className="home">
                <Head></Head>
                <Carousel top_stories={news.top_stories}></Carousel>
            </div>
        );
    }
}
