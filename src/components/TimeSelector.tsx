import { Component, ReactNode, createElement } from "react";
import TimePicker, { TimePickerProps } from "rc-time-picker";
import FormGroup from "react-bootstrap/lib/FormGroup";
import classnames from "classnames";

export interface TimeSelectorProps extends TimePickerProps {
    label: string | null;
    containerClassName?: string;
}

interface TimeSelectorState {
    focus: boolean;
}

export class TimeSelector extends Component<TimeSelectorProps, TimeSelectorState> {
    onOpen = this.openHandler.bind(this);
    onClose = this.closeHandler.bind(this);

    constructor(props: TimeSelectorProps) {
        super(props);

        this.state = {
            focus: false
        };
    }

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
                        className={this.state.focus ? "focus" : ""}
                        value={this.props.value}
                        placement="bottomLeft"
                        prefixCls="time-input-widget"
                        onChange={this.props.onChange}
                        onOpen={this.onOpen}
                        onClose={this.onClose}
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

    openHandler(): void {
        this.setState({ focus: true });
        if (this.props.onOpen) {
            this.props.onOpen({ open: true });
        }
    }

    closeHandler(): void {
        this.setState({ focus: false });
        if (this.props.onClose) {
            this.props.onClose({ open: false });
        }
    }
}
