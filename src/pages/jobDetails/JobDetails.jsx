import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Mail,
  MessageCircle,
  Phone,
  UserCheck,
  UserX,
  X,
  Briefcase,
  MapPin,
  GraduationCap,
  Star,
  FileText
} from "lucide-react";

import { applicants } from "../../data/mockData";
import ApplicantDetails from "./ApplicantDetails";
import "./JobDetails.css";

export default function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const applicant =
    applicants.find(
      (item) => String(item.id) === String(id)
    ) ||
    applicants.find(
      (item) => item.name === id
    );

  const [status, setStatus] = useState(
    applicant?.status || "Pending"
  );

  const [showSchedule, setShowSchedule] = useState(false);

  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");

  const [notification, setNotification] = useState("");

  if (!applicant) {
    return (
      <div className="job-details-empty">
        <div className="empty-icon">
          <FileText size={32} />
        </div>

        <h2>Applicant not found</h2>

        <p>
          We couldn't find the application you're looking for.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={17} />
          Back to Dashboard
        </button>
      </div>
    );
  }

  const showNotification = (message) => {
    setNotification(message);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const handleShortlist = () => {
    setStatus("Shortlisted");
    showNotification(
      `${applicant.name} has been shortlisted.`
    );
  };

  const handleReject = () => {
    setStatus("Rejected");
    showNotification(
      `${applicant.name}'s application has been rejected.`
    );
  };

  const handleHire = () => {
    setStatus("Hired");
    showNotification(
      `${applicant.name} has been marked as hired.`
    );
  };

  const handleScheduleInterview = () => {
    if (!interviewDate || !interviewTime) {
      showNotification(
        "Please select an interview date and time."
      );
      return;
    }

    setStatus("Interview Scheduled");
    setShowSchedule(false);

    showNotification(
      `Interview scheduled for ${applicant.name}.`
    );
  };

  const getStatusClass = () => {
    return status
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  return (
    <div className="job-details-page">

      {/* SUCCESS NOTIFICATION */}

      {notification && (
        <div className="job-notification">
          <CheckCircle size={18} />
          {notification}
        </div>
      )}

      {/* TOP NAVIGATION */}

      <div className="details-top">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          Back to Applications
        </button>

        <div className="application-status">

          <span className="status-label">
            Application Status
          </span>

          <span
            className={`application-status-badge ${getStatusClass()}`}
          >
            <span className="status-dot"></span>
            {status}
          </span>

        </div>

      </div>

      {/* PAGE HEADER */}

      <div className="candidate-header">

        <div className="candidate-header-left">

          <div className="large-profile-avatar">
            {applicant.name
              ? applicant.name.charAt(0).toUpperCase()
              : "S"}
          </div>

          <div className="candidate-header-info">

            <span className="eyebrow">
              CANDIDATE APPLICATION
            </span>

            <h1>
              {applicant.name}
            </h1>

            <p className="candidate-role">
              {applicant.jobTitle ||
                applicant.skill ||
                "Job Applicant"}
            </p>

            <div className="candidate-meta">

              <span>
                <MapPin size={15} />
                {applicant.location ||
                  "Hyderabad, India"}
              </span>

              <span>
                <Briefcase size={15} />
                {applicant.experience ||
                  "2 Years Experience"}
              </span>

              <span>
                <Star
                  size={15}
                  fill="currentColor"
                />
                {applicant.rating || "4.8"}
              </span>

            </div>

          </div>

        </div>

        <div className="candidate-header-actions">

          <button
            className="outline-action-btn"
            onClick={() =>
              showNotification(
                "Message feature coming soon."
              )
            }
          >
            <MessageCircle size={17} />
            Message
          </button>

          <button
            className="outline-action-btn"
            onClick={() =>
              showNotification(
                "Resume download feature coming soon."
              )
            }
          >
            <Download size={17} />
            Resume
          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="details-layout">

        {/* LEFT COLUMN */}

        <div className="details-main">

          {/* STUDENT DETAILS */}

          <ApplicantDetails
            applicant={applicant}
          />

          {/* SKILLS */}

          <div className="professional-card">

            <div className="card-title">

              <div className="card-title-icon">
                <Star size={18} />
              </div>

              <div>
                <h2>
                  Skills & Expertise
                </h2>

                <p>
                  Candidate's professional skills
                </p>
              </div>

            </div>

            <div className="skills-container">

              {(applicant.skills || [
                applicant.skill || "React",
                "JavaScript",
                "HTML & CSS",
                "Git",
                "Responsive Design"
              ]).map((skill, index) => (
                <span
                  className="skill-tag"
                  key={index}
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* JOB DETAILS */}

          <div className="professional-card">

            <div className="card-title">

              <div className="card-title-icon">
                <Briefcase size={18} />
              </div>

              <div>
                <h2>
                  Applied Job
                </h2>

                <p>
                  Position and application information
                </p>
              </div>

            </div>

            <div className="job-details-grid">

              <div className="job-detail-box">
                <span>Job Position</span>
                <strong>
                  {applicant.jobTitle ||
                    applicant.skill ||
                    "Frontend Developer"}
                </strong>
              </div>

              <div className="job-detail-box">
                <span>Employment Type</span>
                <strong>
                  {applicant.jobType ||
                    "Full Time"}
                </strong>
              </div>

              <div className="job-detail-box">
                <span>Application Date</span>
                <strong>
                  {applicant.appliedDate ||
                    "August 24, 2026"}
                </strong>
              </div>

              <div className="job-detail-box">
                <span>Application Status</span>
                <strong>
                  {status}
                </strong>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="details-sidebar">

          {/* CONTACT CARD */}

          <div className="professional-card contact-card">

            <div className="card-title">

              <div className="card-title-icon">
                <Mail size={18} />
              </div>

              <div>
                <h2>
                  Contact Candidate
                </h2>

                <p>
                  Get in touch with the applicant
                </p>
              </div>

            </div>

            <div className="contact-list">

              <a
                href={`mailto:${
                  applicant.email ||
                  "candidate@email.com"
                }`}
              >
                <Mail size={17} />

                <div>
                  <small>Email</small>
                  <span>
                    {applicant.email ||
                      "candidate@email.com"}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${
                  applicant.phone ||
                  "+919876543210"
                }`}
              >
                <Phone size={17} />

                <div>
                  <small>Phone</small>
                  <span>
                    {applicant.phone ||
                      "+91 98765 43210"}
                  </span>
                </div>
              </a>

            </div>

          </div>

          {/* APPLICATION ACTIONS */}

          <div className="professional-card">

            <div className="card-title">

              <div className="card-title-icon">
                <UserCheck size={18} />
              </div>

              <div>
                <h2>
                  Application Actions
                </h2>

                <p>
                  Manage this application
                </p>
              </div>

            </div>

            <div className="professional-actions">

              <button
                className="action-shortlist"
                onClick={handleShortlist}
              >
                <UserCheck size={18} />
                Shortlist Candidate
              </button>

              <button
                className="action-interview"
                onClick={() =>
                  setShowSchedule(true)
                }
              >
                <Calendar size={18} />
                Schedule Interview
              </button>

              <button
                className="action-hire"
                onClick={handleHire}
              >
                <CheckCircle size={18} />
                Mark as Hired
              </button>

              <button
                className="action-reject"
                onClick={handleReject}
              >
                <UserX size={18} />
                Reject Application
              </button>

            </div>

          </div>

          {/* APPLICATION TIMELINE */}

          <div className="professional-card">

            <div className="card-title">

              <div className="card-title-icon">
                <Clock size={18} />
              </div>

              <div>
                <h2>
                  Application Timeline
                </h2>

                <p>
                  Recent application activity
                </p>
              </div>

            </div>

            <div className="timeline">

              <div className="timeline-item">

                <div className="timeline-icon">
                  <CheckCircle size={14} />
                </div>

                <div>
                  <strong>
                    Application Received
                  </strong>

                  <span>
                    August 24, 2026
                  </span>
                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-icon">
                  <UserCheck size={14} />
                </div>

                <div>
                  <strong>
                    Application Under Review
                  </strong>

                  <span>
                    Today
                  </span>
                </div>

              </div>

              {status === "Interview Scheduled" && (
                <div className="timeline-item">

                  <div className="timeline-icon">
                    <Calendar size={14} />
                  </div>

                  <div>
                    <strong>
                      Interview Scheduled
                    </strong>

                    <span>
                      {interviewDate} at{" "}
                      {interviewTime}
                    </span>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* INTERVIEW MODAL */}

      {showSchedule && (

        <div className="modal-overlay">

          <div className="schedule-modal">

            <div className="modal-header">

              <div className="modal-title">

                <div className="modal-icon">
                  <Calendar size={20} />
                </div>

                <div>
                  <h2>
                    Schedule Interview
                  </h2>

                  <p>
                    Schedule an interview with{" "}
                    <strong>
                      {applicant.name}
                    </strong>
                  </p>
                </div>

              </div>

              <button
                className="close-btn"
                onClick={() =>
                  setShowSchedule(false)
                }
              >
                <X size={20} />
              </button>

            </div>

            <div className="form-group">

              <label>
                Interview Date
              </label>

              <div className="input-with-icon">

                <Calendar size={17} />

                <input
                  type="date"
                  value={interviewDate}
                  onChange={(e) =>
                    setInterviewDate(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                Interview Time
              </label>

              <div className="input-with-icon">

                <Clock size={17} />

                <input
                  type="time"
                  value={interviewTime}
                  onChange={(e) =>
                    setInterviewTime(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

            <div className="interview-note">
              <Calendar size={16} />

              <span>
                The candidate will be notified
                about the scheduled interview.
              </span>
            </div>

            <div className="modal-actions">

              <button
                className="secondary-btn"
                onClick={() =>
                  setShowSchedule(false)
                }
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={
                  handleScheduleInterview
                }
              >
                <CheckCircle size={17} />
                Confirm Interview
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}