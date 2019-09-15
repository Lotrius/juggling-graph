import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateSelectAvg = ({ averageDate }) => {
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

export default DateSelectAvg;