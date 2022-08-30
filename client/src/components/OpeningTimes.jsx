import React from "react";
const OpeningTimes = () => {
  return (
    <div className="container">
      <center>
      <table className="table table-layout: fixed, text-center border shadow text-white bg-dark w-55">
          <thead>
            <tr>
              <th scope="col">Days of Week</th>
              <th scope="col">Opening Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-shadow">
              <th scope="row">Monday - Friday</th>
              <td>10:00 - 22:00</td>
            </tr>

            <tr className="table-shadow">
              <th scope="row">Saturday</th>
              <td>09:00 - 02:00</td>
            </tr>
            <tr className="table-shadow">
              <th scope="row">Sunday</th>
              <td>10:00 - 23:00</td>
            </tr>
            <tr className="table:">
              <th scope="row">Bank Holidays</th>
              <td>CLOSED</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default OpeningTimes;

