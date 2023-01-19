import React from "react";
import "./jobs.scss";
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <>
      <div className="job-body">
        <div className="job-container">
          <div className="job-card">
            <p className="job-text">Find a job</p>
            <div className="link-container">
              <ul className="list-links">
                <li className="link">
                  <a href="">See All</a>
                </li>
                <li className="link">
                  <a href="">Filter Search</a>
                </li>
                <li className="link">
                  <a href="">CV builder</a>
                </li>
                <li className="link">
                  <Link to="/opp"> List </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="job-card">
            <p className="job-text">Post a job</p>
            <form className="form-fields">
              <label className="inputBox" htmlFor="position">
                Position:
                <input id="position" type="text" name="position" />
              </label>
              <label className="inputBox" htmlFor="company_name">
                Company name:
                <input id="company_name" type="text" name="company_name" />
              </label>
              <label className="inputBox" htmlFor="salary_range">
                Salary range:
                <input id="salary_range" type="text" name="salary_range" />
              </label>
              <label className="inputBox" htmlFor="company_description">
                Company description:
                <textarea
                  id="company_description"
                  type="text"
                  name="company_description"
                />
              </label>
              <label className="inputBox" htmlFor="job_description">
                Job description:
                <textarea
                  id="job_description"
                  type="text"
                  name="job_description"
                />
              </label>
              <button type="submit" className="button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
