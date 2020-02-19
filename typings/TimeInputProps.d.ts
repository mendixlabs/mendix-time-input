/**
 * This file was generated from TimeInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type NotationTypeEnum = "twentyfour" | "twelvehours";

export interface TimeInputContainerProps extends CommonProps {
    dataInput: EditableValue<Date>;
    labelShow: boolean;
    labelCaption?: string;
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
    styleObject: CSSProperties;
    dataInput: string;
    labelShow: boolean;
    labelCaption?: string;
    placeHolderText?: string;
    notationType: NotationTypeEnum;
    formattingString?: string;
    showHourEnable: boolean;
    showMinuteEnable: boolean;
    showSecondsEnable: boolean;
    stepSizeHour: number;
    stepSizeMinute: number;
    stepSizeSecond: number;
    skipHours?: string;
    skipMinutes?: string;
    skipSeconds?: string;
    skipHideDisabled: boolean;
    actionOnChange?: ActionPreview;
    actionOnOpen?: ActionPreview;
    actionOnLeave?: ActionPreview;
}

export interface VisibilityMap {
    dataInput: boolean;
    labelShow: boolean;
    labelCaption: boolean;
    placeHolderText: boolean;
    notationType: boolean;
    formattingString: boolean;
    showHourEnable: boolean;
    showMinuteEnable: boolean;
    showSecondsEnable: boolean;
    stepSizeHour: boolean;
    stepSizeMinute: boolean;
    stepSizeSecond: boolean;
    skipHours: boolean;
    skipMinutes: boolean;
    skipSeconds: boolean;
    skipHideDisabled: boolean;
    actionOnChange: boolean;
    actionOnOpen: boolean;
    actionOnLeave: boolean;
}
