import { Component, ReactNode, createElement } from "react";
import TimePicker, { TimePickerProps } from "rc-time-picker";
import FormGroup from "react-bootstrap/lib/FormGroup";
import classnames from "classnames";

export interface TimeSelectorProps extends TimePickerProps {
    label: string | null;
    containerClassName?: string;
}

export class TimeSelector extends Component<TimeSelectorProps> {
    render(): ReactNode {
        return (
            <FormGroup
                className={classnames(this.props.containerClassName, this.props.label !== null ? "" : "no-columns")}
            >
                {this.renderLabel()}
                <div
                    className={classnames(
                        "time-input-widget-wrapper",
                        this.props.className,
                        this.props.label !== null ? "col-sm-9" : "mx-compound-control"
                    )}
                >
                    <TimePicker
                        value={this.props.value}
                        placement="bottomLeft"
                        prefixCls="time-input-widget"
                        onChange={this.props.onChange}
                        onOpen={this.props.onOpen}
                        onClose={this.props.onClose}
                        allowEmpty={false}
                        use12Hours={this.props.use12Hours}
                        showHour={this.props.showHour}
                        showMinute={this.props.showMinute}
                        showSecond={this.props.showSecond}
                        format={this.props.format}
                        placeholder={this.props.placeholder}
                        hourStep={this.props.hourStep}
                        minuteStep={this.props.minuteStep}
                        secondStep={this.props.secondStep}
                        disabled={this.props.disabled}
                        disabledHours={this.props.disabledHours}
                        disabledMinutes={this.props.disabledMinutes}
                        disabledSeconds={this.props.disabledSeconds}
                        hideDisabledOptions={this.props.hideDisabledOptions}
                    />
                </div>
            </FormGroup>
        );
    }

    renderLabel(): ReactNode {
        const { label } = this.props;
        return label === null ? null : <label className={classnames("control-label", "col-sm-3")}>{label}</label>;
    }
}
