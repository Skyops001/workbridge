import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./jobDetails.css";

const JobDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [saved, setSaved] = useState(false);

    // Demo data - later replace with API
    const job = {
        id: id || 1,
        title: "Sales Executive",
        company: "Fashion Hub Retail Pvt. Ltd.",
        category: "Retail",
        location: "Banjara Hills, Hyderabad",
        salary: "₹1,200 / Day",
        paymentType: "Daily Payment",
        workDate: "30 August 2026",
        startTime: "10:00 AM",
        endTime: "7:00 PM",
        requiredWorkers: 4,
        applicants: 12,
        experience: "0 - 2 Years",
        status: "Active",
        description:
            "We are looking for energetic and customer-friendly Sales Executives to assist customers, manage product displays, and support daily store operations.",
        skills: [
            "Customer Service",
            "Communication",
            "Sales",
            "Teamwork"
        ],
        responsibilities: [
            "Assist customers with product selection",
            "Maintain product displays",
            "Handle customer queries",
            "Support the store manager with daily activities"
        ],
        dressCode: "Formal / Smart Casual",
        contactPerson: "Rahul Sharma"
    };

    return (
        <div className="job-details-page">
            {/* Header */}
            <div className="job-details-top">
                <button
                    className="back-btn"
                    onClick={() => navigate(-1)}
                >
                    ← Back to Jobs
                </button>

                <span className="job-status">{job.status}</span>
            </div>

            <div className="job-details-grid">
                {/* Main Details */}
                <div className="job-main-content">

                    <div className="job-hero-card">
                        <div className="company-logo">
                            {job.company.charAt(0)}
                        </div>

                        <div className="job-hero-info">
                            <h1>{job.title}</h1>
                            <h3>{job.company}</h3>
                            <p>📍 {job.location}</p>
                        </div>
                    </div>

                    <div className="details-card">
                        <h2>Job Description</h2>
                        <p>{job.description}</p>
                    </div>

                    <div className="details-card">
                        <h2>Job Information</h2>

                        <div className="job-info-grid">
                            <div className="info-item">
                                <span>💰 Salary</span>
                                <strong>{job.salary}</strong>
                            </div>

                            <div className="info-item">
                                <span>💳 Payment</span>
                                <strong>{job.paymentType}</strong>
                            </div>

                            <div className="info-item">
                                <span>📅 Work Date</span>
                                <strong>{job.workDate}</strong>
                            </div>

                            <div className="info-item">
                                <span>🕒 Working Hours</span>
                                <strong>
                                    {job.startTime} - {job.endTime}
                                </strong>
                            </div>

                            <div className="info-item">
                                <span>👥 Workers Required</span>
                                <strong>{job.requiredWorkers}</strong>
                            </div>

                            <div className="info-item">
                                <span>💼 Experience</span>
                                <strong>{job.experience}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="details-card">
                        <h2>Required Skills</h2>

                        <div className="skills-container">
                            {job.skills.map((skill) => (
                                <span className="skill-tag" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="details-card">
                        <h2>Responsibilities</h2>

                        <ul className="responsibility-list">
                            {job.responsibilities.map((item) => (
                                <li key={item}>✓ {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="job-sidebar">
                    <div className="action-card">
                        <h3>Job Actions</h3>

                        <button
                            className="primary-action"
                            onClick={() =>
                                navigate(`/applications?jobId=${job.id}`)
                            }
                        >
                            👥 View {job.applicants} Applicants
                        </button>

                        <button className="secondary-action">
                            ✏️ Edit Job
                        </button>

                        <button
                            className="secondary-action"
                            onClick={() => setSaved(!saved)}
                        >
                            {saved ? "★ Saved Job" : "☆ Save Job"}
                        </button>
                    </div>

                    <div className="quick-details-card">
                        <h3>Additional Details</h3>

                        <div className="quick-row">
                            <span>Category</span>
                            <strong>{job.category}</strong>
                        </div>

                        <div className="quick-row">
                            <span>Dress Code</span>
                            <strong>{job.dressCode}</strong>
                        </div>

                        <div className="quick-row">
                            <span>Contact</span>
                            <strong>{job.contactPerson}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;