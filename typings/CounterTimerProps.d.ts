/**
 * This file was generated from CounterTimer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface CounterTimerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    endDate: EditableValue<Date>;
    isHour: boolean;
    isMinute: boolean;
    isSecond: boolean;
}

export interface CounterTimerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    endDate: string;
    isHour: boolean;
    isMinute: boolean;
    isSecond: boolean;
}
