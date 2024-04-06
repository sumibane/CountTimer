import { Component, ReactNode } from "react";
import { CounterTimerPreviewProps } from "../typings/CounterTimerProps";

export class preview extends Component<CounterTimerPreviewProps> {
    render(): ReactNode {
        return null;
    }
}

export function getPreviewCss(): string {
    return require("./ui/CounterTimer.css");
}
