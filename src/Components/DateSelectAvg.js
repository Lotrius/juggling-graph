import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

var d = new Date();
d.setMonth(d.getMonth() - 1);

class DateSelectAvg extends Component {
    render() {
        const { averageDate } = this.props;
        return (
            <div >
                <DatePicker
                    selected={averageDate}
                    onChange={date => this.props.getAverageData(date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                />
            </div>

        );
    }
}

export default DateSelectAvg;