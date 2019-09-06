// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// class DateSelectAvg extends Component {
//     constructor() {
//         super();
//         this.state = {
//             startDate: new Date()
//         }
//     }

//     // Change the date on the calendar
//     dateChange = (date) => {
//         this.setState({ startDate: date }); // Change highlighted date on calendar
//         this.props.setDate(date); // Call setDate from props
//     }

//     render() {
//         return (
//             <div >
//                 <DatePicker
//                     selected={startDate}
//                     onChange={date => setStartDate(date)}
//                     dateFormat="MM/YYYY"
//                     showMonthYearPicker
//                 />
//             </div>

//         );
//     }
// }

// export default DateSelectAvg;