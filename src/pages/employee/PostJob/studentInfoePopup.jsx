import React from "react";
import {
  X,
  Star,
  GraduationCap,
  BriefcaseBusiness,
  Languages,
  CalendarDays,
  FileText,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Info,
  UserRound
} from "lucide-react";

import "./studentInfoePopup.css";

const getFirstValue = (...values) => {
  for (const value of values) {
    if (
      value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
    ) {
      return value;
    }
  }

  return "";
};

const formatValue = (value) => {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "Not provided";
  }

  if (Array.isArray(value)) {
    return value.length
      ? value.join(", ")
      : "Not provided";
  }

  if (typeof value === "object") {
    return (
      Object.values(value).filter(Boolean).join(", ") ||
      "Not provided"
    );
  }

  return String(value);
};

const getInitials = (name = "") => {
  const result = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");

  return result.toUpperCase() || "ST";
};

const getStudentProfile = (applicant = {}) => {
  const profile =
    applicant.studentInfo ||
    applicant.student ||
    applicant.studentProfile ||
    applicant.profile ||
    {};

  return {
    qualification: getFirstValue(
      applicant.qualification,
      applicant.education,
      profile.qualification,
      profile.education
    ),

    college: getFirstValue(
      applicant.college,
      applicant.collegeName,
      applicant.university,
      profile.college,
      profile.collegeName,
      profile.university
    ),

    skills: getFirstValue(
      applicant.skills,
      applicant.otherSkills,
      applicant.additionalSkills,
      profile.skills,
      profile.otherSkills
    ),

    experience: getFirstValue(
      applicant.experience,
      applicant.workExperience,
      profile.experience,
      profile.workExperience
    ),

    experienceDetails: getFirstValue(
      applicant.experienceDetails,
      applicant.experienceDescription,
      profile.experienceDetails,
      profile.experienceDescription
    ),

    languages: getFirstValue(
      applicant.languages,
      profile.languages
    ),

    city: getFirstValue(
      applicant.currentCity,
      applicant.city,
      applicant.location,
      profile.currentCity,
      profile.city,
      profile.location
    ),

    availableDays: getFirstValue(
      applicant.availableDays,
      applicant.availabilityDays,
      profile.availableDays,
      profile.availabilityDays
    ),

    availableTime: getFirstValue(
      applicant.availableTime,
      applicant.availabilityTime,
      profile.availableTime,
      profile.availabilityTime
    ),

    email: getFirstValue(
      applicant.email,
      profile.email
    ),

    phone: getFirstValue(
      applicant.phone,
      applicant.mobile,
      applicant.mobileNumber,
      profile.phone,
      profile.mobile,
      profile.mobileNumber
    ),

    about: getFirstValue(
      applicant.about,
      applicant.aboutMe,
      applicant.bio,
      applicant.description,
      profile.about,
      profile.aboutMe,
      profile.bio,
      profile.description
    ),

    jobComment: getFirstValue(
      applicant.jobComment,
      applicant.studentComment,
      applicant.applicationComment,
      applicant.comment,
      applicant.comments,
      applicant.message,
      applicant.coverNote,
      applicant.coverLetter,
      profile.jobComment,
      profile.studentComment,
      profile.applicationComment,
      profile.comment,
      profile.message,
      profile.coverNote,
      profile.coverLetter
    ),

    resume: getFirstValue(
      applicant.resume,
      applicant.resumeUrl,
      applicant.resumeLink,
      profile.resume,
      profile.resumeUrl,
      profile.resumeLink
    )
  };
};

function InfoItem({
  icon: Icon,
  label,
  value
}) {
  return (
    <div className="student-info-item">
      <div className="student-info-item-icon">
        <Icon size={17} />
      </div>

      <div className="student-info-item-content">
        <span>{label}</span>
        <strong>{formatValue(value)}</strong>
      </div>
    </div>
  );
}

export default function StudentInfoModal({
  applicant,
  onClose
}) {
  React.useEffect(() => {
    if (!applicant) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [applicant, onClose]);

  if (!applicant) {
    return null;
  }

  const profile = getStudentProfile(applicant);

  const studentName =
    applicant.name || "Student";

  const primarySkill =
    applicant.skill ||
    "Not provided";

  const rating =
    applicant.rating !== undefined &&
    applicant.rating !== null &&
    applicant.rating !== ""
      ? applicant.rating
      : "N/A";

  const status =
    applicant.status || "Unknown";

  return (
    <div
      className="student-modal-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        className="student-info-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-info-modal-title"
      >
        {/* HEADER */}

        <div className="student-modal-header">
          <div className="student-modal-profile">
            <div className="student-modal-avatar">
              {getInitials(studentName)}
            </div>

            <div>
              <div className="student-modal-name-row">
                <h2 id="student-info-modal-title">
                  {studentName}
                </h2>

                <span className="student-badge">
                  Student
                </span>
              </div>

              <p>
                Candidate information submitted with
                this job application
              </p>
            </div>
          </div>

          <button
            type="button"
            className="student-modal-close"
            onClick={onClose}
            aria-label="Close student information"
          >
            <X size={20} />
          </button>
        </div>

        {/* SUMMARY */}

        <div className="student-summary">
          <div className="student-summary-main">
            <span>Primary Skill</span>
            <strong>{primarySkill}</strong>
          </div>

          <div className="student-summary-rating">
            <Star
              size={17}
              fill="currentColor"
            />

            <strong>{rating}</strong>

            <span>Rating</span>
          </div>

          <span
            className={`student-summary-status ${String(
              status
            )
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {status}
          </span>
        </div>

        {/* BODY */}

        <div className="student-modal-body">

          {/* EDUCATION */}

          <section className="student-modal-section">
            <div className="student-section-heading">
              <div className="student-section-icon">
                <GraduationCap size={18} />
              </div>

              <div>
                <h3>
                  Education & Qualification
                </h3>

                <p>
                  Academic information provided by
                  the student
                </p>
              </div>
            </div>

            <div className="student-info-grid">
              <InfoItem
                icon={GraduationCap}
                label="Qualification"
                value={profile.qualification}
              />

              <InfoItem
                icon={GraduationCap}
                label="College / University"
                value={profile.college}
              />
            </div>
          </section>

          {/* SKILLS */}

          <section className="student-modal-section">
            <div className="student-section-heading">
              <div className="student-section-icon">
                <BriefcaseBusiness size={18} />
              </div>

              <div>
                <h3>
                  Skills & Experience
                </h3>

                <p>
                  Skills and work experience shared
                  by the student
                </p>
              </div>
            </div>

            <div className="student-info-grid">
              <InfoItem
                icon={BriefcaseBusiness}
                label="Primary Skill"
                value={primarySkill}
              />

              <InfoItem
                icon={BriefcaseBusiness}
                label="Other Skills"
                value={profile.skills}
              />

              <InfoItem
                icon={Clock3}
                label="Experience"
                value={profile.experience}
              />

              <InfoItem
                icon={FileText}
                label="Experience Details"
                value={
                  profile.experienceDetails
                }
              />
            </div>
          </section>

          {/* AVAILABILITY */}

          <section className="student-modal-section">
            <div className="student-section-heading">
              <div className="student-section-icon">
                <CalendarDays size={18} />
              </div>

              <div>
                <h3>
                  Availability & Location
                </h3>

                <p>
                  Student availability for work
                </p>
              </div>
            </div>

            <div className="student-info-grid">
              <InfoItem
                icon={Languages}
                label="Languages"
                value={profile.languages}
              />

              <InfoItem
                icon={MapPin}
                label="Current City"
                value={profile.city}
              />

              <InfoItem
                icon={CalendarDays}
                label="Available Days"
                value={profile.availableDays}
              />

              <InfoItem
                icon={Clock3}
                label="Available Time"
                value={profile.availableTime}
              />
            </div>
          </section>

          {/* CONTACT */}

          {(profile.email ||
            profile.phone) && (
            <section className="student-modal-section">
              <div className="student-section-heading">
                <div className="student-section-icon">
                  <UserRound size={18} />
                </div>

                <div>
                  <h3>
                    Contact Information
                  </h3>

                  <p>
                    Contact information available
                    for this application
                  </p>
                </div>
              </div>

              <div className="student-info-grid">
                {profile.email && (
                  <InfoItem
                    icon={Mail}
                    label="Email"
                    value={profile.email}
                  />
                )}

                {profile.phone && (
                  <InfoItem
                    icon={Phone}
                    label="Phone"
                    value={profile.phone}
                  />
                )}
              </div>
            </section>
          )}

          {/* ABOUT */}

          {profile.about && (
            <section className="student-modal-section">
              <div className="student-section-heading">
                <div className="student-section-icon">
                  <Info size={18} />
                </div>

                <div>
                  <h3>
                    About the Student
                  </h3>

                  <p>
                    Introduction provided by the
                    student
                  </p>
                </div>
              </div>

              <div className="student-text-card">
                <p>
                  {formatValue(profile.about)}
                </p>
              </div>
            </section>
          )}

          {/* IMPORTANT: STUDENT APPLICATION COMMENT */}

          <section className="student-modal-section">
            <div className="student-section-heading">
              <div className="student-section-icon">
                <FileText size={18} />
              </div>

              <div>
                <h3>
                  Student Application Message
                </h3>

                <p>
                  Content posted by the student
                  when applying for this job
                </p>
              </div>
            </div>

            <div
              className={`student-application-message ${
                !profile.jobComment
                  ? "empty"
                  : ""
              }`}
            >
              <div className="message-quote">
                “
              </div>

              <p>
                {profile.jobComment
                  ? formatValue(
                      profile.jobComment
                    )
                  : "The student did not add any additional message or comment with this application."}
              </p>
            </div>
          </section>

          {/* RESUME */}

          {profile.resume && (
            <section className="student-modal-section">
              <div className="student-section-heading">
                <div className="student-section-icon">
                  <FileText size={18} />
                </div>

                <div>
                  <h3>Resume</h3>

                  <p>
                    Resume shared by the student
                  </p>
                </div>
              </div>

              <div className="student-resume">
                <div className="student-resume-info">
                  <FileText size={21} />

                  <div>
                    <strong>
                      Student Resume
                    </strong>

                    <span>
                      Resume provided with
                      application
                    </span>
                  </div>
                </div>

                {typeof profile.resume ===
                  "string" &&
                  /^https?:\/\//i.test(
                    profile.resume
                  ) && (
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="student-resume-button"
                    >
                      View Resume
                    </a>
                  )}
              </div>
            </section>
          )}
        </div>

        {/* FOOTER */}

        <div className="student-modal-footer">
          <span>
            Student information submitted for this
            application
          </span>

          <button
            type="button"
            onClick={onClose}
            className="student-modal-done"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}