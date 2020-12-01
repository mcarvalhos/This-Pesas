import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/components/CreateExpenseForm.css";

export default function TableDatePicker() {
  const [startDate, setStartDate] = useState(null);
  // console.log("startDate: ", startDate);
  return (
    <div>
      <DatePicker
        selected={startDate}
        placeholderText="Vencimento"
        onChange={(date) => setStartDate(date)}
        className="form-create_input form-create_date"
        calendarClassName="rasta-stripes"
      />
    </div>
  );
}