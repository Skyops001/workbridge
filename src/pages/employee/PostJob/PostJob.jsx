import React, { useState } from "react";
import {
    BriefcaseBusiness,
    CalendarDays,
    CircleDollarSign,
    MapPin,
    UserRound,
    Plus,
    X,
    Clock3,
} from "lucide-react";
import "./PostJob.css";

const categories = [
    "Retail",
    "Event Jobs",
    "Restaurant",
    "Delivery",
    "Office",
    "Technical",
    "Education",
    "Beauty & Fashion",
    "Warehouse",
    "Other",
];

const paymentTypes = [
    "Hourly",
    "Off Day",
    "Daily",
    "Weekly",
    "Bi-Weekly",
    "Monthly",
    "Off Day",
    "Holiday",
    "Overtime",
    "Night Shift",
    "Day Shift",
    "Rotational Shift"
];

const dressCodes = [
    "No specific dress code",
    "Casual",
    "Formal",
    "Business Casual",
    "Uniform Required",
];

const PostJob = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        skills: [],
        location: "",
        workDate: "",
        startTime: "",
        endTime: "",
        workers: 1,
        salary: "",
        paymentType: "Daily",
        dressCode: "No specific dress code",
        contactPerson: "",
        contactNumber: "",
    });

    const [skillInput, setSkillInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addSkill = () => {
        const skill = skillInput.trim();

        if (!skill) return;

        if (
            formData.skills.some(
                (item) => item.toLowerCase() === skill.toLowerCase()
            )
        ) {
            setSkillInput("");
            return;
        }

        setFormData((prev) => ({
            ...prev,
            skills: [...prev.skills, skill],
        }));

        setSkillInput("");
    };

    const removeSkill = (skillToRemove) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter(
                (skill) => skill !== skillToRemove
            ),
        }));
    };

    const handleSkillKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert("Please enter job title");
            return;
        }

        if (!formData.category) {
            alert("Please select job category");
            return;
        }

        if (!formData.description.trim()) {
            alert("Please enter job description");
            return;
        }

        if (!formData.workDate) {
            alert("Please select work date");
            return;
        }

        if (!formData.startTime || !formData.endTime) {
            alert("Please select working hours");
            return;
        }

        if (!formData.location.trim()) {
            alert("Please enter job location");
            return;
        }

        if (!formData.salary) {
            alert("Please enter salary");
            return;
        }

        try {
            setLoading(true);

            // Connect your API here
            //
            // const response = await jobService.createJob(formData);

            console.log("Job Payload:", formData);

            await new Promise((resolve) =>
                setTimeout(resolve, 1000)
            );

            alert("Job posted successfully!");

        } catch (error) {
            console.error("Post job error:", error);
            alert("Unable to post job");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="post-job-page">

            {/* ================= HEADER ================= */}

            <div className="post-job-header">

                <div className="post-job-header-content">

                    <div className="breadcrumb">
                        <span>WorkBridge</span>
                        <span className="breadcrumb-separator">/</span>
                        <strong>Post a Job</strong>
                    </div>

                    <h1>Post a Job</h1>

                    <p>
                        Create a temporary job and find the right workers
                        for your business.
                    </p>

                </div>

                <div className="header-action-icon">
                    <BriefcaseBusiness size={22} />
                </div>

            </div>

            {/* ================= FORM ================= */}

            <form
                className="post-job-form"
                onSubmit={handleSubmit}
            >

                {/* ================= JOB DETAILS ================= */}

                <section className="form-section">

                    <div className="section-heading">

                        <div className="section-heading-icon">
                            <BriefcaseBusiness size={20} />
                        </div>

                        <div>
                            <h2>Job Details</h2>
                            <p>
                                Provide the basic information about this job.
                            </p>
                        </div>

                    </div>

                    <div className="form-grid">

                        {/* Job Title */}

                        <div className="form-group">

                            <label htmlFor="title">
                                Job Title
                                <span className="required">*</span>
                            </label>

                            <input
                                id="title"
                                type="text"
                                name="title"
                                placeholder="e.g. Sales Executive"
                                value={formData.title}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Category */}

                        <div className="form-group">

                            <label htmlFor="category">
                                Job Category
                                <span className="required">*</span>
                            </label>

                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select a category
                                </option>

                                {categories.map((category) => (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                ))}
                            </select>

                        </div>

                    </div>

                    {/* Description */}

                    <div className="form-group full-width">

                        <label htmlFor="description">
                            Job Description
                            <span className="required">*</span>
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            placeholder="Describe the job responsibilities, expectations, requirements and any other important information..."
                            value={formData.description}
                            onChange={handleChange}
                        />

                        <div className="field-helper">
                            Give applicants enough information to understand
                            the role and responsibilities.
                        </div>

                    </div>

                    {/* Skills */}

                    <div className="form-group full-width">

                        <label>
                            Skills Required
                        </label>

                        <div className="skill-input">

                            <input
                                type="text"
                                placeholder="Type a skill and press Enter"
                                value={skillInput}
                                onChange={(e) =>
                                    setSkillInput(e.target.value)
                                }
                                onKeyDown={handleSkillKeyDown}
                            />

                            <button
                                type="button"
                                className="add-skill-button"
                                onClick={addSkill}
                            >
                                <Plus size={16} />
                                Add
                            </button>

                        </div>

                        {formData.skills.length > 0 && (
                            <div className="skills-list">

                                {formData.skills.map((skill) => (
                                    <div
                                        className="skill-chip"
                                        key={skill}
                                    >
                                        <span>{skill}</span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeSkill(skill)
                                            }
                                            aria-label={`Remove ${skill}`}
                                        >
                                            <X size={13} />
                                        </button>

                                    </div>
                                ))}

                            </div>
                        )}

                        <div className="field-helper">
                            Add skills that are important for this position.
                        </div>

                    </div>

                </section>

                {/* ================= SCHEDULE ================= */}

                <section className="form-section">

                    <div className="section-heading">

                        <div className="section-heading-icon">
                            <CalendarDays size={20} />
                        </div>

                        <div>
                            <h2>Schedule & Location</h2>
                            <p>
                                Define when and where the work will take place.
                            </p>
                        </div>

                    </div>

                    <div className="form-grid">

                        {/* Work Date */}

                        <div className="form-group">

                            <label htmlFor="workDate">
                                Work Date
                                <span className="required">*</span>
                            </label>

                            <div className="input-with-icon">

                                <CalendarDays size={17} />

                                <input
                                    id="workDate"
                                    type="date"
                                    name="workDate"
                                    value={formData.workDate}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        {/* Workers */}

                        <div className="form-group">

                            <label htmlFor="workers">
                                Number of Workers
                                <span className="required">*</span>
                            </label>

                            <input
                                id="workers"
                                type="number"
                                name="workers"
                                min="1"
                                value={formData.workers}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Start Time */}

                        <div className="form-group">

                            <label htmlFor="startTime">
                                Start Time
                                <span className="required">*</span>
                            </label>

                            <div className="input-with-icon">

                                <Clock3 size={17} />

                                <input
                                    id="startTime"
                                    type="time"
                                    name="startTime"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        {/* End Time */}

                        <div className="form-group">

                            <label htmlFor="endTime">
                                End Time
                                <span className="required">*</span>
                            </label>

                            <div className="input-with-icon">

                                <Clock3 size={17} />

                                <input
                                    id="endTime"
                                    type="time"
                                    name="endTime"
                                    value={formData.endTime}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                    {/* Location */}

                    <div className="form-group full-width">

                        <label htmlFor="location">
                            Job Location
                            <span className="required">*</span>
                        </label>

                        <div className="input-with-icon">

                            <MapPin size={17} />

                            <input
                                id="location"
                                type="text"
                                name="location"
                                placeholder="Enter the complete work location"
                                value={formData.location}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </section>

                {/* ================= PAYMENT ================= */}

                <section className="form-section">

                    <div className="section-heading">

                        <div className="section-heading-icon">
                            <CircleDollarSign size={20} />
                        </div>

                        <div>
                            <h2>Payment Details</h2>
                            <p>
                                Set the compensation offered for this job.
                            </p>
                        </div>

                    </div>

                    <div className="form-grid">

                        {/* Salary */}

                        <div className="form-group">

                            <label htmlFor="salary">
                                Salary
                                <span className="required">*</span>
                            </label>

                            <div className="currency-field">

                                <span className="currency-symbol">
                                    ₹
                                </span>

                                <input
                                    id="salary"
                                    type="number"
                                    name="salary"
                                    min="0"
                                    placeholder="800"
                                    value={formData.salary}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        {/* Payment Type */}

                        <div className="form-group">

                            <label htmlFor="paymentType">
                                Payment Frequency
                                <span className="required">*</span>
                            </label>

                            <select
                                id="paymentType"
                                name="paymentType"
                                value={formData.paymentType}
                                onChange={handleChange}
                            >
                                {paymentTypes.map((type) => (
                                    <option
                                        key={type}
                                        value={type}
                                    >
                                        {type}
                                    </option>
                                ))}
                            </select>

                        </div>

                    </div>

                </section>

                {/* ================= ADDITIONAL DETAILS ================= */}

                <section className="form-section">

                    <div className="section-heading">

                        <div className="section-heading-icon">
                            <UserRound size={20} />
                        </div>

                        <div>
                            <h2>Additional Details</h2>
                            <p>
                                Add contact information and other job requirements.
                            </p>
                        </div>

                    </div>

                    <div className="form-grid">

                        {/* Dress Code */}

                        <div className="form-group">

                            <label htmlFor="dressCode">
                                Dress Code
                            </label>

                            <select
                                id="dressCode"
                                name="dressCode"
                                value={formData.dressCode}
                                onChange={handleChange}
                            >
                                {dressCodes.map((dressCode) => (
                                    <option
                                        key={dressCode}
                                        value={dressCode}
                                    >
                                        {dressCode}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* Contact Person */}

                        <div className="form-group">

                            <label htmlFor="contactPerson">
                                Contact Person
                            </label>

                            <input
                                id="contactPerson"
                                type="text"
                                name="contactPerson"
                                placeholder="e.g. Ananya Sharma"
                                value={formData.contactPerson}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Contact Number */}

                        <div className="form-group">

                            <label htmlFor="contactNumber">
                                Contact Number
                            </label>

                            <input
                                id="contactNumber"
                                type="tel"
                                name="contactNumber"
                                placeholder="Enter contact number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </section>

                {/* ================= ACTIONS ================= */}

                <div className="form-actions">

                    <button
                        type="button"
                        className="cancel-button"
                        onClick={() => window.history.back()}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="submit-job-button"
                        disabled={loading}
                    >
                        {loading ? (
                            "Posting..."
                        ) : (
                            <>
                                <Plus size={18} />
                                Post Job
                            </>
                        )}
                    </button>

                </div>

            </form>

        </div>
    );
};

export default PostJob;