import { Component, ReactNode, createElement } from "react";

import { CounterTimerContainerProps } from "../typings/CounterTimerProps";

import { Timer } from "./components/Timer";

import "./ui/CounterTimer.css";

export class CounterTimer extends Component<CounterTimerContainerProps> {
    render(): ReactNode {
        return (
            <Timer
                value={this.props.endDate}
                isHour={this.props.isHour}
                isMinute={this.props.isMinute}
                isSecond={this.props.isSecond}
                style={this.props.style}
                className={this.props.class}
            />
        );
    }
}
