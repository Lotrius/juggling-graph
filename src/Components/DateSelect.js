import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DateSelect extends Component {
  render() {
    const { date } = this.props;

    return (
      <div >
        <DatePicker className='' selected={date} onChange={date => this.props.setDate(date)} />
      </div>

    );
  }
}

export default DateSelect;