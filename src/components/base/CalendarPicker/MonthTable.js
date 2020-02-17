import React from "react";
import moment from "moment";

const MonthTable = React.memo(function({ show, month, pick }) {
  console.log("render month table");
  let rows = [];
  let cells = [];

  const months = moment.monthsShort().map(data => (
    <td
      key={data}
      onClick={() => pick(data, "month")}
      className={data === month ? "select" : ""}
    >
      <span>{data}</span>
    </td>
  ));

  months.forEach((row, i) => {
    if (i % 3 !== 0 || i === 0) {
      // except zero index
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });

  rows.push(cells); // add last row

  const monthList = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return (
    <>
      {show && (
        <table className="calendar__main">
          <thead>
            <tr>
              <th colSpan="3">SELECT A MONTH</th>
            </tr>
          </thead>
          <tbody>{monthList}</tbody>
        </table>
      )}
    </>
  );
});

export default MonthTable;
