/**
 * @author City
 * @description 轮播图
 * TODO: 进一步封装以及手势
 */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./main.css";

class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
        this.Timer = 0;
        this.show = React.createRef();
    }

    componentDidMount() {
        /* 定时切换索引 */
        this.Timer = setInterval(() => {
            this.cutIndex(this.state.index + 1);
        }, 4000);

        this.show.current.addEventListener("touchstart", () => console.log("触摸开始"), false);
        this.show.current.addEventListener("touchmove", () => console.log("移动中"), false);
        this.show.current.addEventListener("touchend", () => console.log("触摸结束"), false);
    }

    componentWillUnmount() {
        /* 清楚定时器 */
        clearInterval(this.Timer);
    }

    /* Method */

    cutIndex(didIndex) {
        /* 切换索引 */
        if (didIndex > 4) didIndex = 0;

        this.cutShow(this.state.index, didIndex);

        this.setState({
            ...this.state,
            index: didIndex
        });
    }

    cutShow(willIndex, didIndex) {
        /* 切换前 */
        this.show.current.style.transitionDuration = "500ms";
        if (willIndex === 4 && didIndex === 0) didIndex = 5;

        /* 切换展示图 */
        this.show.current.style.marginLeft = `calc(-100% * ${didIndex})`;

        /* 切换后 */
        if (didIndex === 5) {
            setTimeout(() => {
                this.show.current.style.transitionDuration = "0s";
                this.show.current.style.marginLeft = "0";
            }, 500);
        }
    }

    toArticle(id) {
        this.props.history.push("/article/" + id);
    }

    // clearTransition(num) {}

    /* Generate DOM */

    generateShow(value) {
        return (
            <li key={value.id} onClick={() => this.toArticle(value.id)}>
                <img src={value.image} alt="value.title" />
                <div className="car-shadow" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #${value.image_hue.slice(2)} 60%)` }}>
                    <div className="car-content">
                        <h2>{value.title}</h2>
                        <div>{value.hint}</div>
                    </div>
                </div>
            </li>
        );
    }

    render() {
        const { index } = this.state;
        const { top_stories: stories } = this.props;

        return (
            <div className="carousel">
                <ul className="car-show" ref={this.show}>
                    {stories && stories.map(value => this.generateShow(value))}
                    {stories && this.generateShow(stories[0])}
                </ul>
                <ul className="car-control">
                    {stories &&
                        stories.map((value, i) => {
                            return <li key={value.id} className={i === index ? "cut" : null}></li>;
                        })}
                </ul>
            </div>
        );
    }
}

export default withRouter(Carousel);
