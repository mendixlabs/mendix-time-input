[![Apache License](https://img.shields.io/badge/license-Apache%202.0-orange.svg?style=flat-square)](http://www.apache.org/licenses/LICENSE-2.0)
[![Studio](https://img.shields.io/badge/Studio%20version-8.5%2B-blue.svg)](https://appstore.home.mendix.com/link/modeler/)
[![Support](https://img.shields.io/badge/Support-Community%20(no%20active%20support)-orange.svg)](https://docs.mendix.com/developerportal/app-store/app-store-content-support)
![WM](https://img.shields.io/badge/Webmodeler%20compatible-YES-green.svg)
[![GitHub release](https://img.shields.io/github/release/JelteMX/mendix-time-input)](https://github.com/JelteMX/mendix-time-input/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/JelteMX/mendix-time-input)](https://github.com/JelteMX/mendix-time-input/issues)
[![DeepScan grade](https://deepscan.io/api/teams/7221/projects/9643/branches/127915/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=7221&pid=9643&bid=127915)

## Time Input widget for Mendix

![AppStore](/assets/AppStoreIcon.png)

Choose your time using a dropdown. This widget is a pluggable widget, offline compatible, only intended for Web (not Native Mobile). As this is a pluggable widget, it is also compatible with Mendix Studio (Web).

![screenshot](/assets/dropdown.png)

> This pluggable widget is intended to be used in Mendix Studio 8.5 and higher, Theoretically this should work in Mendix 8.0 to 8.4 as well, but due to some bugs in the platform this cannot be guaranteed.

## Features

- Display a DateTime as a 24H/12H/Custom time format
- Open a dropdown where you select the hours, minutes, seconds
- HH, mm, ss can be switched off
- Set step size (for example, only select 15 min interval)
- Show/hide label
- Skip hours/minutes/seconds by setting this in a range

Tested:

- IE11, Edge,
- Chrome
- Firefox
- Safari

## Basic Configuration

### General

![settings](/assets/settings1.png)

- Select a DateTime attribute
- Placeholder can be set when you have an empty field
- Formatting: Can either be 24H (default), 12H or custom.
- Show segments: In the dropdown, some segments can be switched on an off

### Constraints

![settings](/assets/settings2.png)

- Step size can be set to make intervals, e.g. 15 minutes
- Skipping certain numbers. Use a string that is comprised of numbers or ranges, seperated by a comma.

### Events

![settings](/assets/settings3.png)

## Used libraries

- [multi-integer-range](https://www.npmjs.com/package/multi-integer-range) - MIT License
- [rc-time-picker](https://www.npmjs.com/package/rc-time-picker) - MIT Licnese
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap/v/0.33.1) - MIT License

## Demo project

Demo can be viewed here: [https://timeinput-testproj-sandbox.mxapps.io/](https://timeinput-testproj-sandbox.mxapps.io/)

## Issues, suggestions and feature requests

Issues can be reported [here](https://github.com/JelteMX/mendix-time-input/issues)

## License

Apache 2
