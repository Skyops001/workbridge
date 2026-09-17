import React from "react";
import { MapPin, CalendarDays, IndianRupee, ArrowRight } from "lucide-react";

export default function JobCard({ job }) {
  return <div className="job-card">
    <div className="job-icon">{job.title.charAt(0)}</div>
    <div className="job-main">
      <div className="job-title-row"><div><h3>{job.title}</h3><p>{job.company}</p></div><span className="tag">{job.category}</span></div>
      <div className="job-meta"><span><MapPin size={15}/>{job.city}</span><span><CalendarDays size={15}/>{job.date}</span><span><IndianRupee size={15}/>{job.salary}</span></div>
      <div className="skill-row">{job.skills.split(", ").map(s => <span key={s}>{s}</span>)}</div>
    </div>
    <button
                className="view-btn"
                onClick={() => navigate(`/jobs/${job.id}`)}
            >
                View Details
            </button>
  </div>;
}
