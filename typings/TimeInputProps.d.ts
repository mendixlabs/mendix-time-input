/**
 * This file was generated from TimeInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type NotationTypeEnum = "twentyfour" | "twelvehours";

export interface TimeInputContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataInput: EditableValue<Date>;
    labelShow: boolean;
    labelCaption: string;
    placeHolderText?: DynamicValue<string>;
    notationType: NotationTypeEnum;
    formattingString?: DynamicValue<string>;
    showHourEnable: boolean;
    showMinuteEnable: boolean;
    showSecondsEnable: boolean;
    stepSizeHour: number;
    stepSizeMinute: number;
    stepSizeSecond: number;
    skipHours?: DynamicValue<string>;
    skipMinutes?: DynamicValue<string>;
    skipSeconds?: DynamicValue<string>;
    skipHideDisabled: boolean;
    actionOnChange?: ActionValue;
    actionOnOpen?: ActionValue;
    actionOnLeave?: ActionValue;
}

export interface TimeInputPreviewProps {
    class: string;
    style: string;
    dataInput: string;
    labelShow: boolean;
    labelCaption: string;
    placeHolderText: string;
    notationType: NotationTypeEnum;
    formattingString: string;
    showHourEnable: boolean;
    showMinuteEnable: boolean;
    showSecondsEnable: boolean;
    stepSizeHour: number | null;
    stepSizeMinute: number | null;
    stepSizeSecond: number | null;
    skipHours: string;
    skipMinutes: string;
    skipSeconds: string;
    skipHideDisabled: boolean;
    actionOnChange: {} | null;
    actionOnOpen: {} | null;
    actionOnLeave: {} | null;
}
