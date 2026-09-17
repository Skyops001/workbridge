import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Star,
  Briefcase,
  GraduationCap
} from "lucide-react";

export default function ApplicantDetails({ applicant }) {
  return (
    <div className="applicant-details-card">

      <div className="applicant-profile">
        <div className="profile-avatar">
          {applicant.name.charAt(0)}
        </div>

        <div>
          <h2>{applicant.name}</h2>
          <p>{applicant.skill}</p>

          <span className="rating">
            <Star size={16} fill="currentColor" />
            {applicant.rating} Rating
          </span>
        </div>
      </div>

      <div className="details-grid">

        <div className="detail-item">
          <Mail size={18} />
          <div>
            <small>Email</small>
            <p>{applicant.email || "candidate@email.com"}</p>
          </div>
        </div>

        <div className="detail-item">
          <Phone size={18} />
          <div>
            <small>Phone</small>
            <p>{applicant.phone || "+91 98765 43210"}</p>
          </div>
        </div>

        <div className="detail-item">
          <MapPin size={18} />
          <div>
            <small>Location</small>
            <p>{applicant.location || "Hyderabad, India"}</p>
          </div>
        </div>

        <div className="detail-item">
          <Briefcase size={18} />
          <div>
            <small>Experience</small>
            <p>{applicant.experience || "2 Years"}</p>
          </div>
        </div>

        <div className="detail-item">
          <GraduationCap size={18} />
          <div>
            <small>Education</small>
            <p>{applicant.education || "Bachelor's Degree"}</p>
          </div>
        </div>

      </div>

    </div>
  );
}