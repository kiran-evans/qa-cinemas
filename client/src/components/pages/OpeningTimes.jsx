import React from "react";
const OpeningTimes = () => {
  return (
    <div className="openingTimes">
    <h1>Opening Times</h1>
    <table>
      <thead>
      <tr>
        <th>Days</th>
        <th>Time</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mon - Fri</td>
          <td>10.00- 23.00</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>9.00- 02.00</td>
        </tr>
        <tr>
            <td>Sunday</td>
            <td>10.00-22.00</td>
          </tr>
          <tr>
            <td>Christmas Day</td>
            <td>closed</td>
          </tr>
          </tbody>
      </table>
    </div>
  );
};

export default OpeningTimes;

