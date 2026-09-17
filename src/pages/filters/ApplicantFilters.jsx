import React from "react";
import {
  ChevronDown,
  Search,
  X
} from "lucide-react";

import "./applicantFilters.css";

export default function ApplicantFilters({
  id,
  filters,
  setFilters,
  applicants = [],
  onApply,
  onClear
}) {
  const uniqueSkills = [
    ...new Set(
      applicants
        .map((applicant) => applicant.skill)
        .filter(Boolean)
    )
  ].sort((a, b) =>
    String(a).localeCompare(String(b))
  );

  const uniqueStatuses = [
    ...new Set(
      applicants
        .map((applicant) => applicant.status)
        .filter(Boolean)
    )
  ].sort((a, b) =>
    String(a).localeCompare(String(b))
  );

  const clearFilters = () => {
    setFilters({
      name: "",
      rating: "ALL",
      skill: "ALL",
      status: "ALL"
    });

    if (onClear) {
      onClear();
    }
  };

  return (
    <div
      id={id}
      className="applicant-filter-panel"
      role="region"
      aria-label="Applicant filters"
    >
      <div className="applicant-filter-grid">

        {/* =================================================
            CANDIDATE
        ================================================= */}

        <div className="dashboard-filter-field filter-name-field">
          <label htmlFor="candidate-filter">
            Candidate
          </label>

          <div className="dashboard-filter-input">
            <Search
              size={17}
              aria-hidden="true"
            />

            <input
              id="candidate-filter"
              type="text"
              placeholder="Search candidate..."
              value={filters.name || ""}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  name: event.target.value
                }))
              }
            />

            {filters.name && (
              <button
                type="button"
                className="filter-input-clear"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    name: ""
                  }))
                }
                aria-label="Clear candidate search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* =================================================
            RATING
        ================================================= */}

        <div className="dashboard-filter-field">
          <label htmlFor="rating-filter">
            Rating
          </label>

          <div className="dashboard-filter-select">
            <select
              id="rating-filter"
              value={filters.rating || "ALL"}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  rating: event.target.value
                }))
              }
            >
              <option value="ALL">
                All Ratings
              </option>

              <option value="5">
                5 Stars
              </option>

              <option value="4">
                4+ Stars
              </option>

              <option value="3">
                3+ Stars
              </option>

              <option value="2">
                2+ Stars
              </option>

              <option value="1">
                1+ Stars
              </option>
            </select>

            <ChevronDown
              size={17}
              className="filter-select-chevron"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* =================================================
            PRIMARY SKILL
        ================================================= */}

        <div className="dashboard-filter-field">
          <label htmlFor="skill-filter">
            Primary Skill
          </label>

          <div className="dashboard-filter-select">
            <select
              id="skill-filter"
              value={filters.skill || "ALL"}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  skill: event.target.value
                }))
              }
            >
              <option value="ALL">
                All Skills
              </option>

              {uniqueSkills.map((skill) => (
                <option
                  key={skill}
                  value={skill}
                >
                  {skill}
                </option>
              ))}
            </select>

            <ChevronDown
              size={17}
              className="filter-select-chevron"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* =================================================
            STATUS
        ================================================= */}

        <div className="dashboard-filter-field">
          <label htmlFor="status-filter">
            Status
          </label>

          <div className="dashboard-filter-select">
            <select
              id="status-filter"
              value={filters.status || "ALL"}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  status: event.target.value
                }))
              }
            >
              <option value="ALL">
                All Statuses
              </option>

              {uniqueStatuses.map((status) => (
                <option
                  key={status}
                  value={status}
                >
                  {status}
                </option>
              ))}
            </select>

            <ChevronDown
              size={17}
              className="filter-select-chevron"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* =================================================
          FILTER ACTIONS
      ================================================= */}

      <div className="applicant-filter-footer">
        <button
          type="button"
          className="apply-filters-btn"
          onClick={onApply}
        >
          Apply Filters
        </button>

        <button
          type="button"
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}