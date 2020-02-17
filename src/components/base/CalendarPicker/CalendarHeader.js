import React from 'react';

function CalendarHeader({ date, prev, next, showYearTable }) {
  return (
    <div className="calendar__header">
      <button className="btn" type="button" onClick={prev}>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0417 20.8713L11.0417 14.8713L17.0417 8.87134"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="calendar__month-year">
        <button
          className="btn btn--month-year"
          type="button"
          onClick={showYearTable}
        >
          {date.format("MMMM")} {date.format("YYYY")}
        </button>
      </div>
      <button className="btn" type="button" onClick={next}>
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20.8713L17 14.8713L11 8.87134"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default CalendarHeader;
