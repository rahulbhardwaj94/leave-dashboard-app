import "./App.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  useEffect(() => {
    document.title = "Leave Dashboard ";
  }, []);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const partners = [
    { value: "partner1", label: "Partner 1" },
    { value: "partner2", label: "Partner 2" },
    { value: "partner3", label: "Partner 3" },
  ];

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="outerDiv">
      <h1 className="welcome center-text">Welcome to Leave Dashboard</h1>
      <div>
        <button onClick={handleButtonClick} className="button-top-left">
          Add Leave
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <h3 className="center-text">Apply for a leave</h3>

          {/* Date Picker */}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select Start Date"
            className="datePickerClass"
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select End Date"
            className="datePickerClass"
          />

          {/* Time Picker */}
          <DatePicker
            selected={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Select Time"
            className="timePickerClass"
          />

          {/* Partner Dropdown */}
          <Select
            value={selectedPartner}
            onChange={setSelectedPartner}
            options={partners}
            placeholder="Select Partner"
            className="selectPartnerClass"
          />

          {/* Save or Cancel Buttons */}
          <div className="buttons">
            <button className="buttonSave" onClick={() => setShowPopup(false)}>
              Save
            </button>
            <button
              className="buttonCancel"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
