import React from "react";
//opening times page
const OpeningTimes = () => {
  return (
    <div className="container">
      <center>
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Days of Week</th>
              <th scope="col">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-info">
              <th scope="row">Monday - Friday</th>
              <td>10:00 - 22:00</td>
            </tr>

            <tr className="table-primary">
              <th scope="row">Saturday</th>
              <td>09:00 - 02:00</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Sunday</th>
              <td>10:00 - 23:00</td>
            </tr>
            <tr className="table:">
              <th scope="row">Exceptions: Bank Holidays</th>
              <td>CLOSED</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default OpeningTimes;

