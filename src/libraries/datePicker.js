import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerc(props) {
  const [selectedDate, setselectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setselectedDate(date)}
        dateFormat='dd/MM/yyyy'
        // maxDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 1}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      ></DatePicker>
    </div>
  );
}

export default DatePickerc;
