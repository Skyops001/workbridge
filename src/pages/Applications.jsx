import React from "react";
import { applications } from "../data/mockData";

export default function ApplicantDetails() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <span className="eyebrow">TRACKING</span>
          <h1>Applications</h1>
          <p>Track your applications and job progress.</p>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Employer</th>
              <th>Applied on</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((a) => (
              <tr key={a.id}>
                <td>
                  <b>{a.job}</b>
                </td>
                <td>{a.employer}</td>
                <td>{a.date}</td>
                <td>
                  <span
                    className={`status ${a.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {a.status}
                  </span>
                </td>
                <td>
                  <button className="mini-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}