/**
 * @author City
 * @description 轮播图
 */

import React, { Component } from "react";
import "./main.css";

export default class Carousel extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props.top_stories);
        const { top_stories: stories } = this.props;

        return (
            <div className="carousel">
                <ul className="car-show">
                    {stories &&
                        stories.map(value => {
                            return (
                                <li key={value.id}>
                                    <img src={value.image} alt="value.title" />
                                    <div
                                        className="car-shadow"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #${value.image_hue.slice(
                                                2
                                            )} 60%)`
                                        }}
                                    >
                                        <div className="car-content">
                                            <h2>{value.title}</h2>
                                            <div>{value.hint}</div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
                <div className="car-control"></div>
            </div>
        );
    }
}
