import { ReactNode, createElement } from "react";
import { TimeSelector } from "./components/TimeSelector";
import { hot } from "react-hot-loader/root";
import moment from "moment";
import MultiRange from "multi-integer-range";
import { TimeInputContainerProps } from "../typings/TimeInputProps";
import { ActionValue } from "mendix";

import "./ui/TimeInput.scss";

const TimeInput = (props: TimeInputContainerProps): ReactNode => {
    const onChange = (momentVal: moment.Moment): void => {
        const { dataInput, actionOnChange } = props;
        const dateVal = momentVal.toDate();
        dataInput.setValue(dateVal);

        if (actionOnChange && actionOnChange.canExecute) {
            actionOnChange.execute();
        }
    };

    const actionHandler = (action?: ActionValue): void => {
        if (action && action.canExecute) {
            action.execute();
        }
    };

    const onOpen = (): void => {
        actionHandler(props.actionOnOpen);
    };

    const onClose = (): void => {
        actionHandler(props.actionOnLeave);
    };

    const {
        dataInput,
        labelShow,
        labelCaption,
        notationType,
        formattingString,
        placeHolderText,
        skipHours,
        skipMinutes,
        skipSeconds
    } = props;

    if (!dataInput || dataInput.status !== "available") {
        return <div className="empty-timeinput-field" />;
    }

    const format = formattingString && formattingString.status === "available" ? formattingString.value : undefined;
    const readOnly = dataInput.readOnly;
    const placeholder = placeHolderText && placeHolderText.status === "available" ? placeHolderText.value : undefined;
    const value = moment(dataInput.value);

    const skipHoursArray: number[] =
        skipHours && skipHours.status === "available" && skipHours.value !== ""
            ? new MultiRange(skipHours.value).toArray()
            : [];
    const skipMinutesArray: number[] =
        skipMinutes && skipMinutes.status === "available" && skipMinutes.value !== ""
            ? new MultiRange(skipMinutes.value).toArray()
            : [];
    const skipSecondsArray: number[] =
        skipSeconds && skipSeconds.status === "available" && skipSeconds.value !== ""
            ? new MultiRange(skipSeconds.value).toArray()
            : [];

    return (
        <TimeSelector
            containerClassName={props.class}
            value={value}
            label={labelShow && labelCaption ? labelCaption : null}
            onChange={onChange}
            onOpen={onOpen}
            onClose={onClose}
            use12Hours={notationType === "twelvehours"}
            showHour={props.showHourEnable}
            showMinute={props.showMinuteEnable}
            showSecond={props.showSecondsEnable}
            hourStep={props.stepSizeHour}
            minuteStep={props.stepSizeMinute}
            secondStep={props.stepSizeSecond}
            format={format}
            placeholder={placeholder}
            disabled={readOnly}
            disabledHours={() => skipHoursArray}
            disabledMinutes={() => skipMinutesArray}
            disabledSeconds={() => skipSecondsArray}
            hideDisabledOptions={props.skipHideDisabled}
        />
    );
};

export default hot(TimeInput);
