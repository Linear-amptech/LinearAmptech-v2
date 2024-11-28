import React, { useState } from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import jobsData from "../data/jobsData";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

const ApplyForm = () => {
  const { jobId } = useParams(); // Get jobId from URL
  const job = jobsData.find((job) => job.id === parseInt(jobId)); // Find job by id

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [educationQualification, setEducationQualification] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state
  const [resumeAccessibility, setResumeAccessibility] = useState(null); // null, "checking", "accessible", "notAccessible"
  const [formSubmitted, setFormSubmitted] = useState(false); // State for form submission

  const handleResumeUrlChange = (e) => {
    const url = e.target.value;
    setResumeUrl(url);
    if (url) {
      checkResumeAccessibility(url);
    } else {
      setResumeAccessibility(null);
    }
  };

  const checkResumeAccessibility = async (url) => {
    setResumeAccessibility("checking");

    // Validate if URL is from Google Drive or Google Docs
    const isGoogleUrl = url.match(/^https:\/\/(drive|docs)\.google\.com/);
    if (!isGoogleUrl) {
      setResumeAccessibility("notAccessible");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (response.status === 200) {
        setResumeAccessibility("accessible");
      } else {
        setResumeAccessibility("notAccessible");
      }
    } catch (error) {
      setResumeAccessibility("notAccessible");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate LinkedIn URL format
    const linkedInUrlPattern =
      /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
    if (linkedInProfile && !linkedInUrlPattern.test(linkedInProfile)) {
      alert(
        "Please enter a valid LinkedIn profile URL (e.g., https://www.linkedin.com/in/username)"
      );
      return;
    }

    if (resumeAccessibility !== "accessible") {
      setIsSubmitting(false);
      alert(
        "Please provide a public Google Drive or Google Docs resume link. Make sure the link is accessible to anyone, or maybe url invalid. Please check again."
      );
      return;
    }
    setIsSubmitting(true);

    // Endpoint URL from Google Apps Script deployment
    // const scriptURL = "http://localhost:3001/job/apply";
    const scriptURL = "https://api.linear-amptech.com/job/apply";

    const formData = {
      fullName,
      email,
      mobileNumber,
      educationQualification,
      jobTitle: job.title,
      resumeUrl,
      linkedInProfile,
      gender,
    };

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true); // Show thank you card on success
      } else {
        alert("Failed to submit application. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="text-center mt-20">
        <p className="text-2xl text-gray-600">Job not found</p>
      </div>
    );
  }

  if (formSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="bg-[#f5f8fa]  flex items-center justify-center h-[calc(100vh-72px)] px-4">
          <div className="bg-white rounded-lg shadow-md p-10 max-w-lg text-center ">
            <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-700 text-lg">
              Your application has been successfully submitted. We appreciate
              your interest in joining our team. Our team will review your
              application and get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f8fa] min-h-screen relative">
      <Header />

      {/* Background Section */}
      <div
        className="relative  h-[300px] w-[100%] flex justify-center items-center bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2021/07/20/06/13/businessmen-6479839_1280.jpg"})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      </div>

      {/* Form Section */}
      <div className="relative container max-w-screen-md mx-auto p-6 -mt-[188px] z-1">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
          {/* Job Information */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-1 text-center">
              {job.title}
            </h2>

            <div className="flex justify-between items-center mt-4 mb-6 flex-row">
              <p className="text-center text-gray-600 ">
                <span className="text-gray-700">Job Title:</span> {job.jobTitle}
              </p>
              <p className="text-center text-gray-600 ">
                <span className="text-gray-700">Posted Date:</span>{" "}
                {job.datePosted}
              </p>
            </div>
            <hr />
          </div>

          {/* Application Form */}
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name and Gender Row */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-grow">
                <label className="block text-gray-700 mb-1" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full lg:w-1/3">
                <label className="block text-gray-700 mb-1" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white"
                  required
                >
                  <option value="" hidden disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>

                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Email and Mobile Number Row */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2">
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="mobileNumber"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            {/* Education Qualification */}
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="educationQualification"
              >
                Education Qualification
              </label>
              <select
                id="educationQualification"
                value={educationQualification}
                onChange={(e) => setEducationQualification(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white"
                required
              >
                <option value="" hidden>
                  Select Qualification
                </option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            {/* LinkedIn Profile URL */}
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="linkedInProfile"
              >
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                id="linkedInProfile"
                value={linkedInProfile}
                onChange={(e) => setLinkedInProfile(e.target.value)}
                required
                placeholder="Enter LinkedIn profile URL"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            {/* Resume URL */}
            <div className="relative">
              <div className="flex justify-between items-center flex-wrap">
                <label className="block text-gray-700 mb-1" htmlFor="resumeUrl">
                  Resume URL
                </label>
                {/* Accessibility Message */}
                <div className="flex items-center">
                  {resumeAccessibility === "checking" && (
                    <div className="flex items-center text-gray-800">
                      <FaSpinner className="animate-spin mr-1 text-gray-800" />
                      <span>Checking Accessibility...</span>
                    </div>
                  )}
                  {resumeAccessibility === "accessible" && (
                    <div className="flex items-center text-green-600">
                      <FaCheckCircle className="mr-1" />
                      <span>Resume Accessible</span>
                    </div>
                  )}
                  {resumeAccessibility === "notAccessible" && (
                    <div className="flex items-center text-red-600">
                      <FaTimesCircle className="mr-1" />
                      <span> Resume Not Accessible</span>
                    </div>
                  )}
                </div>
              </div>
              <input
                type="url"
                id="resumeUrl"
                value={resumeUrl}
                onChange={handleResumeUrlChange}
                placeholder="Enter Google Drive or Google Docs resume link"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              {/* Hint Message for Resume URL */}
              {resumeAccessibility === "notAccessible" && (
                <p className="text-sm text-red-600 mt-2">
                  <i>
                    Please provide a public Google Drive or Google Docs resume
                    link. Make sure the link is accessible to anyone, or maybe
                    url invalid. Please check again.
                  </i>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-500 hover:cursor-pointer text-center disabled:opacity-50 flex items-center justify-center"
              disabled={isSubmitting} // Disable button when submitting
            >
              {isSubmitting ? (
                <FaSpinner className="animate-spin mr-2" size={24} />
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
