import { CSSProperties, Component, createElement } from "react";
import { EditableValue } from "mendix";

export interface InputProps {
    value: EditableValue<Date>;
    isHour: boolean;
    isMinute: boolean;
    isSecond: boolean;
    style?: CSSProperties;
    className?: string;
}

export class Timer extends Component<InputProps> {
    intervalId: NodeJS.Timeout | null = null;

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.forceUpdate();
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render() {
        const { value, isHour, isMinute, isSecond, style, className } = this.props;
        let sec,
            min,
            hr = 0;
        const selectedDate = value.value;
        const currentDate = new Date();

        if (!selectedDate) {
            return (
                <div className={className} style={style}>
                    ERR!
                </div>
            );
        }

        const timeDifference = selectedDate?.getTime() - currentDate.getTime();
        const isNegative = timeDifference < 0;
        const absoluteTimeDifference = Math.abs(timeDifference);

        let formattedTime = `${isNegative ? "-" : ""}`;
        let tempTime = "";

        //Hour = true; Minute = true; Second = true
        if (isHour && isMinute && isSecond) {
            hr = Math.floor(absoluteTimeDifference / 3600000);
            min = Math.floor((absoluteTimeDifference % 3600000) / 60000);
            sec = Math.floor((absoluteTimeDifference % 60000) / 1000);
            tempTime =
                `${String(hr).padStart(2, "0")}:` +
                `${String(min).padStart(2, "0")}:` +
                `${String(sec).padStart(2, "0")}`;
        }
        //Hour = true; Minute = true; Second = false
        else if (isHour && isMinute && !isSecond) {
            hr = Math.floor(absoluteTimeDifference / 3600000);
            min = Math.floor((absoluteTimeDifference % 3600000) / 60000);
            tempTime = `${String(hr).padStart(2, "0")}:` + `${String(min).padStart(2, "0")}:`;
        }
        //Hour = true; Minute = false; Second = false
        else if (isHour && !isMinute && !isSecond) {
            hr = Math.floor(absoluteTimeDifference / 3600000);
            tempTime = `${String(hr).padStart(2, "0")}`;
        }
        //Hour = true; Minute = false; Second = true
        else if (isHour && !isMinute && isSecond) {
            hr = Math.floor(absoluteTimeDifference / 3600000);
            sec = Math.floor((absoluteTimeDifference % 3600000) / 1000);
            tempTime = `${String(hr).padStart(2, "0")}:` + `${String(sec).padStart(2, "0")}`;
        }
        //Hour = false; Minute = true; Second = true
        else if (!isHour && isMinute && isSecond) {
            min = Math.floor(absoluteTimeDifference / 60000);
            sec = Math.floor((absoluteTimeDifference % 60000) / 1000);
            tempTime = `${String(min).padStart(2, "0")}:` + `${String(sec).padStart(2, "0")}`;
        }
        //Hour = false; Minute = true; Second = false
        else if (!isHour && isMinute && !isSecond) {
            min = Math.floor(absoluteTimeDifference / 60000);
            tempTime = `${String(min).padStart(2, "0")}`;
        }
        //Hour = false; Minute = false; Second = true
        else if (!isHour && !isMinute && isSecond) {
            sec = Math.floor(absoluteTimeDifference / 1000);
            tempTime = `${String(sec).padStart(2, "0")}`;
        }

        formattedTime = `${isNegative ? "-" : ""}` + tempTime;

        return (
            <div className={className} style={style}>
                {formattedTime}
            </div>
        );
    }
}
