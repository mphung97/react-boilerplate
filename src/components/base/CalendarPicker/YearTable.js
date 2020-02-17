import React from "react";
import moment from "moment";

const YearTable = React.memo(function({ show, year, pick }) {
  let years = [];

  console.log("render year table");
  const first = year - 4;
  const last = year + 7;

  let getYears = (first, last) => {
    let years = [];
    let firstYear = moment(first, "YYYY");
    const lastYear = moment(last, "YYYY");

    while (firstYear <= lastYear) {
      years.push(parseInt(moment(firstYear).format("YYYY"), 10));
      firstYear = moment(firstYear).add(1, "year");
    }
    return years;
  };

  const yearRange = getYears(first, last);

  yearRange.map(data => {
    return years.push(
      <td
        key={data}
        onClick={() => pick(data, "year")}
        className={data === year ? "select" : ""}
      >
        <span>{data}</span>
      </td>
    );
  });

  let rows = [];
  let cells = [];

  years.forEach((row, i) => {
    if (i % 3 !== 0 || i === 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });

  rows.push(cells);

  const yearList = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return (
    <>
      {show && (
        <table className="calendar__main">
          <thead>
            <tr>
              <th colSpan="3">SELECT A YEAR</th>
            </tr>
          </thead>
          <tbody>{yearList}</tbody>
        </table>
      )}
    </>
  );
});

export default YearTable;
