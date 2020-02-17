import React from "react";
import moment from "moment";

const DayOfWeek = React.memo(function() {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => {
    return (
      <th key={day} className="calendar__week-day">
        {day.toUpperCase()}
      </th>
    );
  });
});

const DateTable = React.memo(function({ show, date, pick }) {
  console.log("render date table");

  let blanks = [],
    daysInMonth = [];

  const getFirstDayOfMonth = date => {
    let firstDay = moment(date)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  const getDaysInMonth = () => {
    return date.daysInMonth();
  };

  for (let i = 1; i <= getFirstDayOfMonth(date); i++) {
    blanks.push(
      <td key={i} className="calendar-day empty">
        {""}
      </td>
    );
  }

  for (let d = 1; d <= getDaysInMonth(); d++) {
    const firstKey = getFirstDayOfMonth(date);
    let today = d === parseInt(date.format("D"), 10) ? "select" : "";
    daysInMonth.push(
      <td
        onClick={() => pick(d, "day")}
        key={firstKey + d}
        className={`calendar-day ${today}`}
      >
        <span>{d}</span>
      </td>
    );
  }

  const totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) {
      // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return (
    <>
      {show && (
        <table className="calendar__main">
          <thead>
            <tr>
              <DayOfWeek />
            </tr>
          </thead>
          <tbody>{daysinmonth}</tbody>
        </table>
      )}
    </>
  );
});

export default DateTable;
