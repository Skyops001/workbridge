import React from "react";
import {
  ArrowRight,
  Clock3,
  Plus,
  SlidersHorizontal,
  Search,
  Star,
  Info
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { stats, jobs, applicants } from "../data/mockData";
import ApplicantFilters from "./filters/ApplicantFilters";
import StatCard from "../components/StatCard";
import JobCard from "../components/JobCard";
import StudentInfoModal from "./employee/PostJob/studentInfoePopup";

const EMPTY_FILTERS = {
  name: "",
  rating: "ALL",
  skill: "ALL",
  status: ""
};

/* =========================================================
   HELPERS
========================================================= */

const getInitials = (name = "") => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");

  return initials.toUpperCase() || "ST";
};

/* =========================================================
   DASHBOARD
========================================================= */

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  /* -------------------------------------------------------
     FILTER STATE
  ------------------------------------------------------- */

  const [showFilters, setShowFilters] =
    React.useState(false);

  const [filters, setFilters] =
    React.useState(EMPTY_FILTERS);

  const [draftFilters, setDraftFilters] =
    React.useState(EMPTY_FILTERS);

  /* -------------------------------------------------------
     STUDENT INFO MODAL STATE

     IMPORTANT:
     This must be inside Dashboard().
  ------------------------------------------------------- */

  const [selectedApplicant, setSelectedApplicant] =
    React.useState(null);

  const role = user?.role?.toLowerCase();

  /* =======================================================
     FILTER PANEL
  ======================================================= */

  const toggleFilters = () => {
    if (!showFilters) {
      setDraftFilters(filters);
    }

    setShowFilters((prev) => !prev);
  };

  const applyFilters = () => {
    setFilters(draftFilters);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setFilters(EMPTY_FILTERS);
    setDraftFilters(EMPTY_FILTERS);
  };

  /* =======================================================
     FILTER APPLICANTS
  ======================================================= */

  const filteredApplicants = applicants.filter(
    (applicant) => {
      const searchName =
        filters.name?.toLowerCase().trim() || "";

      const applicantName =
        applicant.name?.toLowerCase() || "";

      const matchesName =
        !searchName ||
        applicantName.includes(searchName);

      const matchesRating =
        filters.rating === "ALL" ||
        Number(applicant.rating || 0) >=
          Number(filters.rating);

      const matchesSkill =
        filters.skill === "ALL" ||
        applicant.skill === filters.skill;

      const matchesStatus =
        filters.status === "" ||
        filters.status === "ALL" ||
        applicant.status === filters.status;

      return (
        matchesName &&
        matchesRating &&
        matchesSkill &&
        matchesStatus
      );
    }
  );

  /* =======================================================
     ACTIVE FILTER COUNT
  ======================================================= */

  const hasActiveFilters =
    Object.values(filters).some(
      (value) =>
        value !== "" &&
        value !== "ALL"
    );

  const activeFilterCount =
    Object.values(filters).filter(
      (value) =>
        value !== "" &&
        value !== "ALL"
    ).length;

  /* =======================================================
     OPEN STUDENT INFORMATION
  ======================================================= */

  const handleViewStudentInfo = (applicant) => {
    setSelectedApplicant(applicant);
  };

  /* =======================================================
     CLOSE STUDENT INFORMATION
  ======================================================= */

  const handleCloseStudentInfo = () => {
    setSelectedApplicant(null);
  };

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <div className="dashboard-page">

      {/* ===================================================
          PAGE HEADER
      =================================================== */}

      <div className="page-heading">

        <div className="dashboard-welcome">

          <span className="eyebrow">
            OVERVIEW
          </span>

          <h1>
            Good evening,{" "}
            {user?.name?.split(" ")[0] || "User"} 👋
          </h1>

          <p>
            Here’s what’s happening with your WorkBridge
            account today.
          </p>

        </div>

        {user?.role === "EMPLOYER" && (
          <button
            type="button"
            className="primary-btn"
            onClick={() => navigate("/post-job")}
          >
            <Plus size={18} />
            Post a job
          </button>
        )}

      </div>

      {/* ===================================================
          STATISTICS
      =================================================== */}

      <div className="stats-grid">

        {stats[role]?.map(
          (stat, index) => (
            <StatCard
              key={stat[0]}
              index={index}
              title={stat[0]}
              value={stat[1]}
              note={stat[2]}
            />
          )
        )}

      </div>

      {/* ===================================================
          STUDENT DASHBOARD
      =================================================== */}

      {user?.role === "STUDENT" && (
        <>
          <div className="section-head">

            <div>
              <h2>
                Recommended jobs
              </h2>

              <p>
                Jobs matching your skills and preferences
              </p>
            </div>

            <a
              href="/jobs"
              className="view-all-btn"
            >
              View all
              <ArrowRight size={15} />
            </a>

          </div>

          <div className="job-list">

            {jobs
              .slice(0, 3)
              .map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                />
              ))}

          </div>
        </>
      )}

      {/* ===================================================
          EMPLOYER DASHBOARD
      =================================================== */}

      {user?.role === "EMPLOYER" && (
        <>

          {/* -----------------------------------------------
              SECTION HEADER
          ----------------------------------------------- */}

          <div className="section-head employer-section-head">

            <div>
              <h2>
                Recent applicants
              </h2>

              <p>
                Review and manage candidates for your
                active jobs.
              </p>
            </div>

            <div className="applicant-filter-actions">

              <a
                href="/applications"
                className="view-all-btn"
              >
                View all
                <ArrowRight size={15} />
              </a>

              <button
                type="button"
                className={`filter-btn ${
                  showFilters ? "active" : ""
                }`}
                onClick={toggleFilters}
                aria-expanded={showFilters}
                aria-controls="applicant-filter-panel"
              >
                <SlidersHorizontal size={16} />

                <span>
                  Filters
                </span>

                {hasActiveFilters && (
                  <span className="filter-count">
                    {activeFilterCount}
                  </span>
                )}
              </button>

            </div>

          </div>

          {/* -----------------------------------------------
              FILTER PANEL
          ----------------------------------------------- */}

          {showFilters && (
            <ApplicantFilters
              id="applicant-filter-panel"
              applicants={applicants}
              filters={draftFilters}
              setFilters={setDraftFilters}
              onApply={applyFilters}
              onClear={clearFilters}
            />
          )}

          {/* -----------------------------------------------
              APPLICANTS TABLE
          ----------------------------------------------- */}

          <div className="table-card applicant-table-card">

            <div className="table-responsive">

              <table>

                <thead>

                  <tr>

                    <th>
                      Candidate
                    </th>

                    <th>
                      Primary Skill
                    </th>

                    <th>
                      Rating
                    </th>

                    <th>
                      Interview Schedule
                    </th>

                    <th>
                      Status
                    </th>

                    {/* NEW COLUMN */}
                    <th className="student-info-column">
                      Student Info
                    </th>

                    <th className="action-column">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredApplicants.length > 0 ? (

                    filteredApplicants.map(
                      (applicant) => (

                        <tr
                          key={
                            applicant.id ||
                            applicant._id ||
                            applicant.name
                          }
                        >

                          {/* =================================
                              CANDIDATE
                          ================================= */}

                          <td>

                            <div className="candidate-cell">

                              <div className="candidate-avatar">
                                {getInitials(
                                  applicant.name
                                )}
                              </div>

                              <div>

                                <b>
                                  {applicant.name ||
                                    "Unknown candidate"}
                                </b>

                                <span>
                                  Candidate
                                </span>

                              </div>

                            </div>

                          </td>

                          {/* =================================
                              PRIMARY SKILL
                          ================================= */}

                          <td>

                            <span className="skill-tag">
                              {applicant.skill || "-"}
                            </span>

                          </td>

                          {/* =================================
                              RATING
                          ================================= */}

                          <td>

                            <span className="rating-value">

                              <Star
                                size={14}
                                fill="currentColor"
                              />

                              {applicant.rating ||
                                "N/A"}

                            </span>

                          </td>

                          {/* =================================
                              INTERVIEW SCHEDULE
                          ================================= */}

                          <td>

                            {applicant.schedulerDate ? (

                              <span className="scheduler-date">

                                <Clock3 size={15} />

                                {new Date(
                                  applicant.schedulerDate
                                ).toLocaleString(
                                  "en-IN",
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                  }
                                )}

                              </span>

                            ) : (

                              <span className="not-scheduled">
                                Not scheduled
                              </span>

                            )}

                          </td>

                          {/* =================================
                              STATUS
                          ================================= */}

                          <td>

                            <span
                              className={`status ${
                                applicant.status
                                  ?.toLowerCase()
                                  .replace(
                                    /\s+/g,
                                    "-"
                                  ) || ""
                              }`}
                            >
                              {applicant.status ||
                                "Unknown"}
                            </span>

                          </td>

                          {/* =================================
                              STUDENT INFO
                          ================================= */}

                          <td className="student-info-column">

                            <button
                              type="button"
                              className="student-info-btn"
                              onClick={() =>
                                handleViewStudentInfo(
                                  applicant
                                )
                              }
                              aria-label={`View student information for ${
                                applicant.name ||
                                "student"
                              }`}
                            >

                              <Info size={15} />

                              <span>
                                View Info
                              </span>

                            </button>

                          </td>

                          {/* =================================
                              ACTION
                          ================================= */}

                          <td className="action-column">

                            <button
                              type="button"
                              className="review-btn"
                              onClick={() =>
                                navigate(
                                  `/job-details/${applicant.id}`
                                )
                              }
                            >

                              Review

                              <ArrowRight
                                size={14}
                              />

                            </button>

                          </td>

                        </tr>

                      )
                    )

                  ) : (

                    <tr>

                      <td
                        colSpan="7"
                        className="no-applicants"
                      >

                        <div className="empty-applicants">

                          <Search size={30} />

                          <b>
                            No applicants found
                          </b>

                          <span>
                            No candidates match your
                            selected filters.
                          </span>

                          <button
                            type="button"
                            onClick={clearFilters}
                          >
                            Clear filters
                          </button>

                        </div>

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </>
      )}

      {/* ===================================================
          ADMIN DASHBOARD
      =================================================== */}

      {user?.role === "ADMIN" && (
        <>

          <div className="section-head">

            <div>

              <h2>
                Platform snapshot
              </h2>

              <p>
                Monitor WorkBridge activity and
                verification queues
              </p>

            </div>

            <a
              href="/admin"
              className="view-all-btn"
            >
              Open admin panel
              <ArrowRight size={15} />
            </a>

          </div>

          <div className="admin-cards">

            <div>
              <span>
                Pending verifications
              </span>

              <b>
                128
              </b>

              <small>
                Students + employers
              </small>
            </div>

            <div>
              <span>
                Jobs awaiting approval
              </span>

              <b>
                52
              </b>

              <small>
                Review required
              </small>
            </div>

            <div>
              <span>
                Open complaints
              </span>

              <b>
                17
              </b>

              <small>
                Need attention
              </small>
            </div>

          </div>

        </>
      )}

      {/* ===================================================
          STUDENT INFO MODAL

          ONLY ONE MODAL INSTANCE
      =================================================== */}

      {selectedApplicant && (
        <StudentInfoModal
          applicant={selectedApplicant}
          onClose={handleCloseStudentInfo}
        />
      )}

    </div>
  );
}